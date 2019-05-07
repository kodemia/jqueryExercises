/*$(".dd-button").on("click", (event)=>{
	console.log($(event.target))
	$(event.target).siblings("ul").slideToggle("400",()=>{
		setTimeout(()=>{
			$("#second-button").trigger("click");
		},1000)
	});
	//$(event.target).slideToggle("400");
  	//$(".custom-dd-wrapper ul")
})*/

$(".custom-dd-wrapper").on("click",(event)=>{
	$(event.target).find("ul").slideToggle();
})

$(".list-item").click((event)=>{
	$(event.target).closest("ul").toggleClass("gray-background red-background")
})

$(".btn").click((event)=>{
	console.log(event.target);
	$(event.target).closest(".card-wrapper").fadeOut(1000,()=>{
		$(event.target).closest(".card-wrapper").remove()
	})

})

/*$("#some-id")
$(".some-class")
$("body ul li")
$("body ul>li")
$("#some-id .some-class")
$("#some-id:hover")*/
//document.getElementById("some-id")