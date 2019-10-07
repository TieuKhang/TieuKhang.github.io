function showFoodMenu() {

    $.ajax({
        type: "GET",
        url: "./demo.xml",
        dataType: "xml",

        error: function (e) {
            alert("An error occurred while processing XML file");
            console.log("XML reading Failed: ", e);
        },

        success: function (response) {

            // make sure the ul is empty
            // before appending data inot it
            $("ul").children().remove();

            $(response).find("food").each(function () {
                var _name = 'Name: ' + $(this).find('name').text();
                console.log(_name);
                
                var _price = 'Price: ' + $(this).find('price').text();
                var _calories = 'Calories: ' + $(this).find('calories').text();
                var _description = 'Description: ' + $(this).find('description').text();

                // add content to the HTML          
                $("ul").append('<li>' + _name + '</li>');
                $("ul").append('<li>' + _price + '</li>');
                $("ul").append('<li>' + _calories + '</li>');
                $("ul").append('<li>' + _description + '</li>');
            });
        }
    });
}

$(document).ready(function () {
	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});
});