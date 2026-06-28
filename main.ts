let _1st_menu_Result = ""
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (blockMenu.isMenuOpen()) {
        blockMenu.closeMenu()
    } else {
        blockMenu.showMenu(
        [
        "whatever",
        "hello",
        "goodbye",
        "hello",
        "goodbye",
        "hello",
        "goodbye"
        ],
        4,
        MenuLocation.BottomHalf,
        [
        sprites.food.smallBurger,
        sprites.food.smallApple,
        sprites.food.smallLemon,
        sprites.food.smallDrumstick,
        sprites.food.smallHam,
        sprites.food.smallPizza
        ]
        )
    }
})
// console.log(option)
blockMenu.onMenuOptionSelected(function (option, index) {
    game.splash(option)
    blockMenu.closeMenu()
    if (!(_1st_menu_Result)) {
        _1st_menu_Result = option
        blockMenu.showMenu(
        [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7"
        ],
        1,
        MenuLocation.LeftHalf,
        [
        sprites.projectile.star1,
        sprites.projectile.star2,
        sprites.projectile.heart1,
        sprites.projectile.heart3,
        sprites.projectile.drop1,
        sprites.builtin.clam1
        ]
        )
    } else {
        _1st_menu_Result = ""
    }
})
