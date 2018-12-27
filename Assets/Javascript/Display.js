function Display() {
    $("#question_div").html(disneyQuestion[0].question);
    question++;
    var choicesArr = disneyQuestion[0].choices;
    var buttonsArr = [];
    for (let i = 0; i < choicesArr.length; i++) {
        var button = $('<button>');
        button.text(choicesArr[i]);
        button.attr('data-id', i);
        $('#choices_div').append(button);
    }
}
