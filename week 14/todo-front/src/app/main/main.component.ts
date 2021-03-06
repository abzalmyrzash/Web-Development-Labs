import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service'
import { ITaskList, ITask } from '../shared/models/models' 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public task_lists: ITaskList[] = [];
  public tasks: ITask[] = [];
  public loading = false;
  public name: any;
  public taskName: any;
  public due_on: any;
  public task_list: any;
  public logged: boolean = false;
  public login: any = '';
  public password: any = '';
  public suffix: any = '';
  public search_suffix : any = '';
  public order_suffix : any = '';
  public filter_suffix : any = '';
  public task_list_cur: any;

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token){
      this.logged = true;
    }

    if (this.logged) {
      this.provider.getTaskLists().then(res => {
        this.task_lists = res;
        setTimeout(() => {
          this.loading = true;
        }, 2000);
      });
    }
  }

  getTasks(task_list: ITaskList, suffix: string) {
    this.provider.getTasks(task_list, suffix).then(res => {
      this.tasks = res;
      this.suffix = '';
    });
  }

  updateTaskList(task_list: ITaskList){
    this.provider.updateTaskList(task_list).then(res =>
      console.log(task_list.name + 'updated'));
  }

  deleteTaskList(task_list: ITaskList) {
    this.provider.deleteTaskList(task_list.id).then(res => {
      console.log(task_list.name + 'deleted')
      this.provider.getTaskLists().then(res => {
        this.task_lists = res;
      }, error => {
        console.log(error);
      });

    });
  }

  createTaskList() {
    if (this.name !== '') {
      this.provider.createTaskList(this.name).then(res => {
        this.name = '';
        this.task_lists.push(res);
      });
    }
  }

  createTask() {
    if (this.name !== '') {
      this.provider.createTask(this.taskName, this.due_on, this.task_list).then(res => {
        this.taskName = '';
      });
    }
  }

  auth(){
    if (this.login !== '' && this.password !== ''){
      this.provider.auth(this.login, this.password).then(res=>{
        localStorage.setItem('token', res.token);
        this.logged = true;
        this.provider.getTaskLists().then(res => {
        this.task_lists = res;
        setTimeout(() => {
          this.loading = true;
        }, 2000);
        });
      })
    }
  }

  logout(){
    this.provider.logout().then(res=>{
      localStorage.removeItem('token')
      this.logged = false
    })
  }

}