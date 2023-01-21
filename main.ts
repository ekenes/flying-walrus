controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (swim1 == 0) {
        mySprite.vy = -150
        mySprite.setImage(assets.image`myImage`)
        pause(187)
        mySprite.setImage(assets.image`tucked wings`)
    }
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (swim2 == 0) {
        mySprite2.vy = -150
        mySprite2.setImage(assets.image`myImage1`)
        pause(187)
        mySprite2.setImage(assets.image`myImage0`)
    }
})
let swim2 = 0
let swim1 = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(assets.image`tucked wings`, SpriteKind.Player)
mySprite2 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.ay = 350
mySprite2.ay = 350
controller.player1.moveSprite(mySprite, 100, 0)
controller.player2.moveSprite(mySprite2, 100, 0)
scene.cameraFollowSprite(mySprite)
game.setDialogTextColor(2)
game.showLongText("Hello, Andy. My name is Pandy. Now you can fly!", DialogLayout.Bottom)
game.onUpdate(function () {
    controller.player1.moveSprite(mySprite, 100, 0)
    controller.player2.moveSprite(mySprite2, 100, 0)
    swim1 = 0
    swim2 = 0
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile`)) {
        swim1 = 1
    }
    if (mySprite2.tileKindAt(TileDirection.Top, assets.tile`myTile`)) {
        swim2 = 1
    }
    if (swim1 == 1) {
        controller.moveSprite(mySprite, 100, 100)
    } else {
        controller.moveSprite(mySprite, 100, 0)
    }
    if (swim2 == 1) {
        controller.player2.moveSprite(mySprite2, 100, 100)
    } else {
        controller.player2.moveSprite(mySprite2, 100, 0)
    }
})
