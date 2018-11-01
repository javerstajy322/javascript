var appWindow = document.getElementById('appWindow');
var addItemEl = document.getElementById('addItem');
var parentWrapEl = document.getElementById('parentWrapper');

addItemEl.addEventListener('keyup', addItem);
appWindow.addEventListener('change', compliteItem);
appWindow.addEventListener('click', removeItems);
appWindow.addEventListener('dblclick', editItem);
appWindow.addEventListener('keyup', editItemSave);
document.addEventListener('click', editItemBlur);



function addItem(event) {
    var val = addItemEl.value;
    if (val.trim() && event.keyCode === 13) {
        addItemEl.value = '';
        parentWrapEl.innerHTML = codeConstructor(val) + parentWrapEl.innerHTML;
    }
}

function compliteItem(event) {
    var isCheckbox = event.target.className === 'checkbox';
    if (isCheckbox) {
        var item = event.target.closest('.item');
        if (item && event.target.checked) {
            item.classList.add('complite');
        }
        if (item && !event.target.checked) {
            item.classList.remove('complite');
        }
    }
}

function removeItems(event) {
    var isRemuve = event.target.className === 'removeItem';
    if (isRemuve) {
        var item = event.target.closest('.item');
        if (item) {
            parentWrapEl.removeChild(item);
        }
    }
}

function editItem(event) {
    var isText = event.target.className === 'text';
    if (isText) {
        var item = event.target.closest('.item');
        if (item) {
            item.classList.add('edit');
            var newText = item.querySelector('.editText');
            newText.value = event.target.innerHTML;
            newText.focus();
        }
    }
}

function editItemSave(event) {
    var isEdit = event.target.className === 'editText';
    if (isEdit && event.keyCode === 13) {
        var item = event.target.closest('.item');
        if (item) {
            // var oldText = item.querySelector('.text');
            // oldText.value = event.target.value;
            item.classList.remove('edit');
            var newText = event.target.value.trim();
            if (newText) {
                item.querySelector('.text').innerHTML = newText;
            }
        }
    }
}

function editItemBlur(event) {
    var isEdit = event.target.className === 'editText';
    if (isEdit) return;
    var edits = appWindow.querySelectorAll('.item.edit .editText');
    for (var i = 0; i < edits.length; i++) {
        var item = edits[i].closest('.item');
        if (item) {
            item.classList.remove('edit');
            var newText = edits[i].value.trim();
            if (newText) {
                item.querySelector('.text').innerHTML = newText;
            }
        }
    }
}

function codeConstructor(val) {
    return '<div class="item">' +
        '<input class="checkbox" type="checkbox" name="">' +
        '<div class="text">' + val + '</div>' +
        '<input class="editText" type="text">' +
        '<button class="removeItem">X</button>' +
        '</div>';
}