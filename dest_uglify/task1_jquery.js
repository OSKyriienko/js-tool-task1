const $position=$("#elemPosition"),$positionOutput=$("#inputPosition"),$btnFade=$("#btnFade");$positionOutput.val(`Left: ${$position.position().left}, Top: ${$position.position().top}`),$btnFade.on("click",function(){$position.toggleClass("fade"),$position.hasClass("fade")?($position.fadeOut(1e3),$btnFade.text("Fade In")):($position.fadeIn(1e3),$btnFade.text("Fade Out"))});