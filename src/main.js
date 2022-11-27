import {createSiteMenuTemplate} from './components/site-menu';
import {createFilterTemplate} from './components/filter';
import {createBoardTemplate} from './components/board';
import {createTaskTemplate} from './components/task';
import {createTaskEditTemplate} from './components/task-edit';
import {createLoadMoreTemplate} from './components/load-more-button';

const TASK_COUNT = 3;

const main = document.querySelector('.main');
const siteHeaderElement = main.querySelector('.main__control');

const render = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

render(siteHeaderElement, createSiteMenuTemplate(), 'beforeend');
render(main, createFilterTemplate(), 'beforeend');
render(main, createBoardTemplate(), 'beforeend');

const boardElement = document.querySelector('.board');
const taskListElement = boardElement.querySelector('.board__tasks');

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate(), 'beforeend');
}

render(taskListElement, createTaskEditTemplate(), 'afterbegin');

render(boardElement, createLoadMoreTemplate(), 'beforeend');
