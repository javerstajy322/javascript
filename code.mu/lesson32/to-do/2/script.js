var appEl = document.getElementById('checklist');
var addItemEl = document.getElementById('addItem');
var itemParentEl = document.getElementById('itemParent');
addItemEl.addEventListener('keyup', addElements);
appEl.addEventListener('change', compliteElements);
appEl.addEventListener('click', removeElements);
appEl.addEventListener('dblclick', editElements);
appEl.addEventListener('keyup', saveEditElements);
document.addEventListener('click', saveEditElementsBlur);

function addElements(event) {
    var val = addItemEl.value;
    if (val.trim() && event.keyCode === 13) {
        addItemEl.innerHTML = '';
        itemParentEl.innerHTML = codeConstruct(val) + itemParentEl.innerHTML;
    }
}

function compliteElements(event) {
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

function removeElements(event) {
    var isRemove = event.target.className === 'cancel';
    if (isRemove) {
        var item = event.target.closest('.item');
        if (item) {
            itemParentEl.removeChild(item);
        }
    }
}

function editElements(event) {
    var isText = event.target.className === 'text';
    if (isText) {
        var item = event.target.closest('.item');
        if (item) {
            item.classList.add('edit')
            var editEl = item.querySelector('.edit');
            editEl.value = event.target.innerHTML;
            editEl.focus();
        }
    }
}

function saveEditElements(event) {
    var isText = event.target.className === 'edit';
    if (isText && event.keyCode === 13) {
        var item = event.target.closest('.item');
        if (item) {
            item.classList.remove('edit');
            var newText = event.target.value.trim();
            if (newText) {
                item.querySelector('.text').innerHTML = newText;
            }
        }
    }
}

function saveEditElementsBlur(event) {
    var isEdit = event.target.className === 'edit';
    if (isEdit) return;
    var edits = appEl.querySelectorAll('.item.edit .edit');
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



function codeConstruct(val) {
    return '<div class="item">' +
        '<input class="checkbox" type="checkbox" name="" id="checkbox">' +
        '<div class="text">' + val + '</div>' +
        '<input type="text" class="edit">' +
        '<button class="cancel">X</button></div>';
}