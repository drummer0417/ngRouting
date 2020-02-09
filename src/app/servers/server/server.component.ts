import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  allowEdit: boolean = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit() {

   this.route.data.subscribe( 
     (data: Data) => {
       this.server = data['server'];
      
   });
    

    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);    
    // this.route.params.subscribe( (params: Params) => {
    //   this.server = this.serversService.getServer(+params['id']);
    // })
  }
  
  onEditServer(){
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
  }

}
