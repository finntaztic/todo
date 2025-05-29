import { Task } from "./task";
import { Todo } from "./todo";

const UI = (() => {
    const dialog = document.querySelector('dialog');
    const btnOpenDialog = document.querySelector('.btn-open-dialog');

    function init (){
        btnOpenDialog.addEventListener('click', () => dialog.showModal());
    }

    //add function that would add the contetn in the wepbpage

    //renderboard will ahdnle appending shit

    return { init };
})();

export { UI }