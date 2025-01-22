export const universityEmailRegex =
  /^([a-zA-Z0-9._+-~!$&'=^`]+)(@((fabiz|amp|csie|cig|drept|fin|man|mk|bbs|stud|eam|economie|rei|com)\.ase|ase)\.ro$)/;

export const studentEmailRegex = /^([a-zA-Z0-9._+-~!$&'=^`]+)(@stud\.ase\.ro$)/;

export const passwordRegex =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;

export const nameRegex = /^[A-Za-z\s]+$/;
