// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyAgdrv97HInRA4uuMBPiqAofxD1idH_Y9s',
    authDomain: 'lavacharts.firebaseapp.com',
    databaseURL: 'https://lavacharts.firebaseio.com',
    projectId: 'lavacharts',
    storageBucket: '',
    messagingSenderId: '419996622127'
  },
};
