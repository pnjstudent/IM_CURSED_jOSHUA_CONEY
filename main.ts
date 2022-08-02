let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = randint(5, 15)
    basic.showIcon(IconNames.Silly)
    while (0 < timer) {
        timer += -1
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Forever)
        basic.showIcon(IconNames.Sword)
        basic.showIcon(IconNames.Angry)
        basic.pause(1000)
    }
    music.playMelody("D C D C D C D C ", 233)
    music.stopAllSounds()
    basic.showIcon(IconNames.Skull)
})
