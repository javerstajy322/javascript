$(document).ready(function () {
    $('#addItem').on('click', addItem);
    $('#todos').on('click', '.removeItem', removeItem);
    $('#todos').on('change', '.compliteItem', compliteItem);
    $('#todos').on('dblclick', '.itemText', editText);
    $('#todos').on('click', '.stopEditText', stopEditText);
    $('#todos').on('keypress', '.stopEditText', function () {
        var newTodoText = $(this).parent().find('.editText').val();
        if (newTodoText.trim() && event.keyCode === 13) {
            addItem();
            event.preventDefault();
        }
    });
    $(document).on('click', function () {
        var isEdit = $('#todos').find('.editText');
        
    });
    $('#newTodoText').on('keypress', function (event) {
        var newTodoText = $('#newTodoText').val();
        if (newTodoText.trim() && event.keyCode === 13) {
            addItem();
            event.preventDefault();
        }
    });

    function addItem(event) {
        var newTodoText = $('#newTodoText').val();
        if (newTodoText.trim()) {
            $('#parentItem').append('<li class="item">' + '<input class="compliteItem" type="checkbox" name="" id="">' + '<span class="itemText">' + newTodoText + '</span>' + '<input class="editText" type="text" name="" id="">' + '<button class="stopEditText">ok</button>' + '<button class="removeItem">X</button>');
            $('#newTodoText').val('');
        }
    }

    function removeItem(event) {
        $(this).parent().remove();
    }

    function compliteItem(event) {
        $(this).parent().toggleClass('done');
    }

    function editText(event) {
        var currentText = $(this).parent().find('.itemText').text();
        $(this).parent().find('.editText').val(currentText);
        $(this).parent().find('.editText').show();
        $(this).parent().find('.stopEditText').show();
        $(this).parent().find('.itemText').hide();
        $(this).parent().find('.compliteItem').hide();
        $(this).parent().find('.removeItem').hide();
    }

    function stopEditText(event) {
        var newTodoText = $(this).parent().find('.editText').val();
        $(this).parent().find('.itemText').text(newTodoText);

        $(this).hide();
        $(this).parent().find('.editText').hide();
        $(this).parent().find('.itemText').show();
        $(this).parent().find('.compliteItem').show();
        $(this).parent().find('.removeItem').show();
    }
});