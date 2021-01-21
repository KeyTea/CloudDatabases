import {Component, OnInit} from '@angular/core';
import {Database, DatabaseService, DatabaseWithCheckbox, Target} from '../database-service';
import {NgForm} from '@angular/forms';

class NavLinkIconTitle {
  label: string;
  path: string;
  icon: string;
  title: string;
}

class DatabaseFields {
  name: string;
  format: string;
}



@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css'],
})
export class ManagementComponent implements OnInit {
  databases: DatabaseWithCheckbox[] = [
    {database: 'Database 1001', cpu: 4, ram: 4, group: 1, server: 'server 1001', checkbox: false},
    {database: 'Database 1002', cpu: 8, ram: 8, group: 1, server: 'server 1002', checkbox: false},
    {database: 'Database 1003', cpu: 12, ram: 12, group: 2, server: 'server 1003', checkbox: false},
    {database: 'Database 1004', cpu: 4, ram: 4, group: 1, server: 'server 1004', checkbox: false},
    {database: 'Database 1005', cpu: 8, ram: 8, group: 1, server: 'server 1005', checkbox: false},
    {database: 'Database 1006', cpu: 12, ram: 12, group: 2, server: 'server 1006', checkbox: false},
    {database: 'Database 1007', cpu: 4, ram: 4, group: 1, server: 'server 1007', checkbox: false},
    {database: 'Database 1008', cpu: 8, ram: 8, group: 1, server: 'server 1008', checkbox: false},
    {database: 'Database 1009', cpu: 12, ram: 12, group: 2, server: 'server 1009', checkbox: false},
    {database: 'Database 1010', cpu: 4, ram: 4, group: 1, server: 'server 1010', checkbox: false},
    {database: 'Database 1011', cpu: 8, ram: 8, group: 1, server: 'server 1011', checkbox: false},
    {database: 'Database 1012', cpu: 12, ram: 12, group: 2, server: 'server 1012', checkbox: false},
    {database: 'Database 1013', cpu: 4, ram: 4, group: 1, server: 'server 1013', checkbox: false},
    {database: 'Database 1014', cpu: 8, ram: 8, group: 1, server: 'server 1014', checkbox: false},
    {database: 'Database 1015', cpu: 12, ram: 12, group: 2, server: 'server 1015', checkbox: false},
    {database: 'Database 1016', cpu: 4, ram: 4, group: 1, server: 'server 1016', checkbox: false},
    {database: 'Database 1017', cpu: 8, ram: 8, group: 1, server: 'server 1017', checkbox: false},
    {database: 'Database 1018', cpu: 12, ram: 12, group: 2, server: 'server 1018', checkbox: false},
    {database: 'Database 1019', cpu: 4, ram: 4, group: 1, server: 'server 1019', checkbox: false},
    {database: 'Database 1020', cpu: 8, ram: 8, group: 1, server: 'server 1020', checkbox: false},
    {database: 'Database 1021', cpu: 12, ram: 12, group: 2, server: 'server 1021', checkbox: false},
    {database: 'Database 1022', cpu: 4, ram: 4, group: 1, server: 'server 1022', checkbox: false},
    {database: 'Database 1023', cpu: 8, ram: 8, group: 1, server: 'server 1023', checkbox: false},
    {database: 'Database 1024', cpu: 12, ram: 12, group: 2, server: 'server 1024', checkbox: false},
    {database: 'Database 1025', cpu: 4, ram: 4, group: 1, server: 'server 1025', checkbox: false},
    {database: 'Database 1026', cpu: 8, ram: 8, group: 1, server: 'server 1026', checkbox: false},
    {database: 'Database 1027', cpu: 12, ram: 12, group: 2, server: 'server 1027', checkbox: false},
    {database: 'Database 1028', cpu: 4, ram: 4, group: 1, server: 'server 1028', checkbox: false},
    {database: 'Database 1029', cpu: 8, ram: 8, group: 1, server: 'server 1029', checkbox: false},
    {database: 'Database 1030', cpu: 12, ram: 12, group: 2, server: 'server 1030', checkbox: false},
    {database: 'Database 1031', cpu: 4, ram: 4, group: 1, server: 'server 1031', checkbox: false},
    {database: 'Database 1032', cpu: 8, ram: 8, group: 1, server: 'server 1032', checkbox: false},
    {database: 'Database 1033', cpu: 12, ram: 12, group: 2, server: 'server 1033', checkbox: false},
    {database: 'Database 1034', cpu: 4, ram: 4, group: 1, server: 'server 1034', checkbox: false},
    {database: 'Database 1035', cpu: 8, ram: 8, group: 1, server: 'server 1035', checkbox: false},
    {database: 'Database 1036', cpu: 12, ram: 12, group: 2, server: 'server 1036', checkbox: false},
    {database: 'Database 1037', cpu: 4, ram: 4, group: 1, server: 'server 1037', checkbox: false},
    {database: 'Database 1038', cpu: 8, ram: 8, group: 1, server: 'server 1038', checkbox: false},
    {database: 'Database 1039', cpu: 12, ram: 12, group: 2, server: 'server 1039', checkbox: false},
    {database: 'Database 1040', cpu: 4, ram: 4, group: 1, server: 'server 1040', checkbox: false},
    {database: 'Database 1041', cpu: 8, ram: 8, group: 1, server: 'server 1041', checkbox: false},
    {database: 'Database 1042', cpu: 12, ram: 12, group: 2, server: 'server 1042', checkbox: false},
    {database: 'Database 1043', cpu: 4, ram: 4, group: 1, server: 'server 1043', checkbox: false},
    {database: 'Database 1044', cpu: 8, ram: 8, group: 1, server: 'server 1044', checkbox: false},
    {database: 'Database 1045', cpu: 12, ram: 12, group: 2, server: 'server 1045', checkbox: false},
    {database: 'Database 1046', cpu: 4, ram: 4, group: 1, server: 'server 1046', checkbox: false},
    {database: 'Database 1047', cpu: 8, ram: 8, group: 1, server: 'server 1047', checkbox: false},
    {database: 'Database 1048', cpu: 12, ram: 12, group: 2, server: 'server 1048', checkbox: false},
    {database: 'Database 1049', cpu: 4, ram: 4, group: 1, server: 'server 1049', checkbox: false},
    {database: 'Database 1050', cpu: 8, ram: 8, group: 1, server: 'server 1050', checkbox: false},
    {database: 'Database 1051', cpu: 12, ram: 12, group: 2, server: 'server 1051', checkbox: false},
    {database: 'Database 1052', cpu: 4, ram: 4, group: 1, server: 'server 1052', checkbox: false},
    {database: 'Database 1053', cpu: 8, ram: 8, group: 1, server: 'server 1053', checkbox: false},
    {database: 'Database 1054', cpu: 12, ram: 12, group: 2, server: 'server 1054', checkbox: false},
    {database: 'Database 1055', cpu: 4, ram: 4, group: 1, server: 'server 1055', checkbox: false},
    {database: 'Database 1056', cpu: 8, ram: 8, group: 1, server: 'server 1056', checkbox: false},
    {database: 'Database 1057', cpu: 12, ram: 12, group: 2, server: 'server 1057', checkbox: false},
    {database: 'Database 1101', cpu: 4, ram: 4, group: 1, server: 'server 1101', checkbox: false},
    {database: 'Database 1102', cpu: 8, ram: 8, group: 1, server: 'server 1102', checkbox: false},
    {database: 'Database 1103', cpu: 12, ram: 12, group: 2, server: 'server 1103', checkbox: false},
    {database: 'Database 1104', cpu: 4, ram: 4, group: 1, server: 'server 1104', checkbox: false},
    {database: 'Database 1105', cpu: 8, ram: 8, group: 1, server: 'server 1105', checkbox: false},
    {database: 'Database 1106', cpu: 12, ram: 12, group: 2, server: 'server 1106', checkbox: false},
    {database: 'Database 1107', cpu: 4, ram: 4, group: 1, server: 'server 1107', checkbox: false},
    {database: 'Database 1108', cpu: 8, ram: 8, group: 1, server: 'server 1108', checkbox: false},
    {database: 'Database 1109', cpu: 12, ram: 12, group: 2, server: 'server 1109', checkbox: false},
    {database: 'Database 1110', cpu: 4, ram: 4, group: 1, server: 'server 1110', checkbox: false},
    {database: 'Database 1111', cpu: 8, ram: 8, group: 1, server: 'server 1111', checkbox: false},
    {database: 'Database 1112', cpu: 12, ram: 12, group: 2, server: 'server 1112', checkbox: false},
    {database: 'Database 1113', cpu: 4, ram: 4, group: 1, server: 'server 1113', checkbox: false},
    {database: 'Database 1114', cpu: 8, ram: 8, group: 1, server: 'server 1114', checkbox: false},
    {database: 'Database 1115', cpu: 12, ram: 12, group: 2, server: 'server 1115', checkbox: false},
    {database: 'Database 1116', cpu: 4, ram: 4, group: 1, server: 'server 1116', checkbox: false},
    {database: 'Database 1117', cpu: 8, ram: 8, group: 1, server: 'server 1117', checkbox: false},
    {database: 'Database 1118', cpu: 12, ram: 12, group: 2, server: 'server 1118', checkbox: false},
    {database: 'Database 1119', cpu: 4, ram: 4, group: 1, server: 'server 1119', checkbox: false},
    {database: 'Database 1120', cpu: 8, ram: 8, group: 1, server: 'server 1120', checkbox: false},
    {database: 'Database 1121', cpu: 12, ram: 12, group: 2, server: 'server 1121', checkbox: false},
    {database: 'Database 1122', cpu: 4, ram: 4, group: 1, server: 'server 1122', checkbox: false},
    {database: 'Database 1123', cpu: 8, ram: 8, group: 1, server: 'server 1123', checkbox: false},
    {database: 'Database 1124', cpu: 12, ram: 12, group: 2, server: 'server 1124', checkbox: false},
    {database: 'Database 1125', cpu: 4, ram: 4, group: 1, server: 'server 1125', checkbox: false},
    {database: 'Database 1126', cpu: 8, ram: 8, group: 1, server: 'server 1126', checkbox: false},
    {database: 'Database 1127', cpu: 12, ram: 12, group: 2, server: 'server 1127', checkbox: false},
    {database: 'Database 1128', cpu: 4, ram: 4, group: 1, server: 'server 1128', checkbox: false},
    {database: 'Database 1129', cpu: 8, ram: 8, group: 1, server: 'server 1129', checkbox: false},
    {database: 'Database 1130', cpu: 12, ram: 12, group: 2, server: 'server 1130', checkbox: false},
    {database: 'Database 1131', cpu: 4, ram: 4, group: 1, server: 'server 1131', checkbox: false},
    {database: 'Database 1132', cpu: 8, ram: 8, group: 1, server: 'server 1132', checkbox: false},
    {database: 'Database 1133', cpu: 12, ram: 12, group: 2, server: 'server 1133', checkbox: false},
    {database: 'Database 1134', cpu: 4, ram: 4, group: 1, server: 'server 1134', checkbox: false},
    {database: 'Database 1135', cpu: 8, ram: 8, group: 1, server: 'server 1135', checkbox: false},
    {database: 'Database 1136', cpu: 12, ram: 12, group: 2, server: 'server 1136', checkbox: false},
    {database: 'Database 1137', cpu: 4, ram: 4, group: 1, server: 'server 1137', checkbox: false},
    {database: 'Database 1138', cpu: 8, ram: 8, group: 1, server: 'server 1138', checkbox: false},
    {database: 'Database 1139', cpu: 12, ram: 12, group: 2, server: 'server 1139', checkbox: false},
    {database: 'Database 1140', cpu: 4, ram: 4, group: 1, server: 'server 1140', checkbox: false},
    {database: 'Database 1141', cpu: 8, ram: 8, group: 1, server: 'server 1141', checkbox: false},
    {database: 'Database 1142', cpu: 12, ram: 12, group: 2, server: 'server 1142', checkbox: false},
    {database: 'Database 1143', cpu: 4, ram: 4, group: 1, server: 'server 1143', checkbox: false},
    {database: 'Database 1144', cpu: 8, ram: 8, group: 1, server: 'server 1144', checkbox: false},
    {database: 'Database 1145', cpu: 12, ram: 12, group: 2, server: 'server 1145', checkbox: false},
    {database: 'Database 1146', cpu: 4, ram: 4, group: 1, server: 'server 1146', checkbox: false},
    {database: 'Database 1147', cpu: 8, ram: 8, group: 1, server: 'server 1147', checkbox: false},
    {database: 'Database 1148', cpu: 12, ram: 12, group: 2, server: 'server 1148', checkbox: false},
    {database: 'Database 1149', cpu: 4, ram: 4, group: 1, server: 'server 1149', checkbox: false},
    {database: 'Database 1150', cpu: 8, ram: 8, group: 1, server: 'server 1150', checkbox: false},
    {database: 'Database 1151', cpu: 12, ram: 12, group: 2, server: 'server 1151', checkbox: false},
    {database: 'Database 1152', cpu: 4, ram: 4, group: 1, server: 'server 1152', checkbox: false},
    {database: 'Database 1153', cpu: 8, ram: 8, group: 1, server: 'server 1153', checkbox: false},
    {database: 'Database 1154', cpu: 12, ram: 12, group: 2, server: 'server 1154', checkbox: false},
    {database: 'Database 1155', cpu: 4, ram: 4, group: 1, server: 'server 1155', checkbox: false},
    {database: 'Database 1156', cpu: 8, ram: 8, group: 1, server: 'server 1156', checkbox: false},
    {database: 'Database 1157', cpu: 12, ram: 12, group: 2, server: 'server 1157', checkbox: false}
  ];
  databaseFields: DatabaseFields [] = [
    {name: 'database', format: 'string'},
    {name: 'instance', format: 'string'},
    {name: 'server', format: 'string'},
    {name: 'cpu', format: 'number'},
    {name: 'ram', format: 'number'},
    {name: 'group', format: 'number'},
    {name: 'target', format: 'string'},
    {name: 'cost', format: 'number'}];
  links: NavLinkIconTitle[] =  [
    {label: 'Create', path: '/management/create', icon: 'add', title: 'Group Creation'},
    {label: 'Move', path: '/management/move', icon: '', title: 'Move Group'},
    {label: 'Remove', path: '/management/remove', icon: '', title: 'Remove Group'}
  ];
  title: NavLinkIconTitle = {label: 'Portfolio Management', path: '', icon: 'arrow_back', title: ''};
  back: NavLinkIconTitle = {label: 'Total Cost of Ownership', path: '/main', icon: 'arrow_forward_ios', title: ''};
  tabs: NavLinkIconTitle[] =  [
    {label: 'Portfolio', path: '/management/portfolio', icon: '', title: 'Portfolio Content'},
    {label: 'Inventory', path: '/management/inventory', icon: '', title: 'Inventory Content'},
    {label: 'Removed DBs', path: '/management/removed', icon: '', title: 'Removed DBs Content'}
  ];
  aTab: NavLinkIconTitle;
  aLink: NavLinkIconTitle;
  filteredDatabases = this.databases.slice();
  constructor(private databaseService: DatabaseService) {
  }
  ngOnInit(): void {
    this.aTab = this.tabs[0];
    this.aLink = this.links[0];
  }
  onSubmit(form: NgForm): void {
    this.databaseService.addDatabase(form.value as Database)
      .subscribe(res => {
        // if (res) {
        //   form.reset();
        // }
      });
  }
}
