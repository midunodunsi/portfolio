document.addEventListener("DocumentLoaded", function (){
    let Slider = this.getElementById("brightness");
    Slider.addEventlistener("input", adjustSlider);
    adjustSlider(Slider);
});
function adjustSlider(e) {
    let body = document.body,
    switchLightMin = 30,
    switchLightMax = 100,
   tar= e.target || e,
    pct = +tar.value / = tar.max,
    l1 = pct * (switchLightMax - switchLightMin) + switchLightMin,
    l2 = l1 - 10,
    l3 = l1 - 37,
    l = [l1, l2, l3],
    thumbHueMin = 0,
    thumbHueMax = 120,
    thumbHue = pct * (thumbHueMax - thumbHueMin) + thumbHueMin,
    thumbSat = 90.4,

    // update the thumb icon hue


}