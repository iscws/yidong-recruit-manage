export interface userEnrollType {
  id: string;
  openId: string;
  username: number;
  sex: string;
  studentId: string;
  phone: number;
  college: string;
  major: string;
  introduction: string;
  status: string;
}

// 定义传递过来的数据类型
export interface infoDataType {
  type: 'enroll' | 'interview' | 'edit';
  direction: number;
}
