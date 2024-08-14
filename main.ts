player.onChat("голем", function () {
    blocks.fill(
    IRON_BLOCK,
    pos(1, 1, 1),
    pos(1, 1, 3),
    FillOperation.Replace
    )
    blocks.place(IRON_BLOCK, pos(1, 0, 2))
    blocks.place(JACK_O_LANTERN, pos(1, 2, 2))
})
player.onChat("ворота-версія2", function () {
    player.say("попереду")
    blocks.fill(
    SEA_LANTERN,
    pos(-8, 5, -24),
    pos(8, 0, -24),
    FillOperation.Outline
    )
    blocks.fill(
    COBWEB,
    pos(-7, 0, -24),
    pos(7, 4, -24),
    FillOperation.Outline
    )
    player.say("те саме, але +24 і ворота будуть позаду")
    blocks.fill(
    SEA_LANTERN,
    pos(-8, 5, 24),
    pos(8, 0, 24),
    FillOperation.Outline
    )
    blocks.fill(
    COBWEB,
    pos(-7, 0, 24),
    pos(7, 4, 24),
    FillOperation.Outline
    )
})
player.onItemInteracted(APPLE, function () {
    player.say("ліхтар")
    blocks.fill(
    SANDSTONE,
    pos(0, 0, 2),
    pos(0, 3, 2),
    FillOperation.Replace
    )
    blocks.place(JACK_O_LANTERN, pos(0, 4, 2))
})
player.onChat("сніговик", function () {
    blocks.place(SNOW, pos(1, 0, 0))
    blocks.place(SNOW, pos(1, 1, 0))
    blocks.place(JACK_O_LANTERN, pos(1, 2, 0))
})
player.onChat("поле", function () {
    blocks.fill(
    SEA_LANTERN,
    pos(-16, -1, -24),
    pos(16, -1, 24),
    FillOperation.Outline
    )
    blocks.fill(
    GRASS,
    pos(-15, -1, -23),
    pos(15, -1, -1),
    FillOperation.Outline
    )
    blocks.fill(
    GRASS,
    pos(-15, -1, 23),
    pos(15, -1, 1),
    FillOperation.Outline
    )
    player.say("контур і у орієнтація в колах!")
    shapes.circle(
    SEA_LANTERN,
    pos(0, -1, 0),
    5,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    SEA_LANTERN,
    pos(0, -1, -19),
    5,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    SEA_LANTERN,
    pos(0, -1, 19),
    5,
    Axis.Y,
    ShapeOperation.Outline
    )
    blocks.fill(
    SEA_LANTERN,
    pos(-8, -1, -24),
    pos(8, -1, -17),
    FillOperation.Outline
    )
    blocks.fill(
    SEA_LANTERN,
    pos(-8, -1, 24),
    pos(8, -1, 17),
    FillOperation.Outline
    )
    blocks.fill(
    GRASS,
    pos(-7, -1, -23),
    pos(7, -1, -18),
    FillOperation.Replace
    )
    blocks.fill(
    GRASS,
    pos(-7, -1, 23),
    pos(7, -1, 18),
    FillOperation.Replace
    )
    blocks.fill(
    SEA_LANTERN,
    pos(-4, -1, -24),
    pos(4, -1, -21),
    FillOperation.Outline
    )
    blocks.fill(
    SEA_LANTERN,
    pos(-4, -1, 24),
    pos(4, -1, 21),
    FillOperation.Outline
    )
    blocks.fill(
    GRASS,
    pos(-3, -1, -23),
    pos(3, -1, -22),
    FillOperation.Replace
    )
    blocks.fill(
    GRASS,
    pos(3, -1, 23),
    pos(-3, -1, 22),
    FillOperation.Replace
    )
})
player.onChat("голем+монстри", function () {
    gameplay.setDifficulty(EASY)
    blocks.fill(
    IRON_BLOCK,
    pos(1, 1, 1),
    pos(1, 1, 3),
    FillOperation.Replace
    )
    blocks.place(IRON_BLOCK, pos(1, 0, 2))
    blocks.place(JACK_O_LANTERN, pos(1, 2, 2))
    for (let index = 0; index < 4; index++) {
        mobs.spawn(mobs.monster(SKELETON), pos(0, 0, 0))
    }
})
player.onChat("ворота1", function () {
    player.say("попереду")
    blocks.fill(
    SEA_LANTERN,
    pos(-8, 5, -24),
    pos(8, 5, -24),
    FillOperation.Outline
    )
    blocks.fill(
    COBWEB,
    pos(-7, 0, -24),
    pos(7, 4, -24),
    FillOperation.Outline
    )
    blocks.fill(
    SEA_LANTERN,
    pos(8, 5, -24),
    pos(8, 0, -24),
    FillOperation.Outline
    )
    blocks.fill(
    SEA_LANTERN,
    pos(-8, 5, -24),
    pos(-8, 0, -24),
    FillOperation.Outline
    )
    player.say("те саме, але +24 і ворота будуть позаду")
    blocks.fill(
    SEA_LANTERN,
    pos(-8, 5, 24),
    pos(8, 5, 24),
    FillOperation.Outline
    )
    blocks.fill(
    COBWEB,
    pos(-7, 0, 24),
    pos(7, 4, 24),
    FillOperation.Outline
    )
    blocks.fill(
    SEA_LANTERN,
    pos(8, 5, 24),
    pos(8, 0, 24),
    FillOperation.Outline
    )
    blocks.fill(
    SEA_LANTERN,
    pos(-8, 5, 24),
    pos(-8, 0, 24),
    FillOperation.Outline
    )
})
player.onItemInteracted(TRIDENT, function () {
    player.say("ліхтар-нічний")
    blocks.fill(
    CHAIN,
    pos(0, 0, 2),
    pos(0, 3, 2),
    FillOperation.Replace
    )
    blocks.place(REDSTONE_LAMP, pos(0, 4, 2))
    blocks.place(blocks.blockByName("daylight_detector_inverted"), pos(0, 5, 2))
})
player.onChat("pl", function () {
    blocks.fill(
    WHITE_CONCRETE,
    pos(-5, 0, 3),
    pos(-4, 0, -3),
    FillOperation.Replace
    )
    blocks.fill(
    RED_CONCRETE,
    pos(-3, 0, 3),
    pos(-2, 0, -3),
    FillOperation.Replace
    )
})
player.onChat("ua", function () {
    blocks.fill(
    LIGHT_BLUE_CONCRETE,
    pos(-5, 0, 3),
    pos(-4, 0, -3),
    FillOperation.Replace
    )
    blocks.fill(
    YELLOW_CONCRETE,
    pos(-3, 0, 3),
    pos(-2, 0, -3),
    FillOperation.Replace
    )
})
