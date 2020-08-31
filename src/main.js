import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';
import { router } from './router/index.routes';

router(window.location.hash);

window.addEventListener('hashchange', (e) => {
  // console.log(window.location.hash);
  router(window.location.hash);
});
