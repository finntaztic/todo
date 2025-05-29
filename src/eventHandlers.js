
function handleOpenDialogBtn (){
    const dialog = document.querySelector('dialog');
    dialog.showModal();
}

function openDialog() {
    const btnOpenDialog = document.querySelector('.btn-open-dialog');
    if (!btnOpenDialog) return;
    btnOpenDialog.addEventListener('click', handleOpenDialogBtn);
}

export { openDialog }