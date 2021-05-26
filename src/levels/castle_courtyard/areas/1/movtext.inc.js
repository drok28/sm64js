// Castle Courtyard

import {
} from "../../../../include/gbi"

import {
    MOV_TEX_INIT_LOAD, MOV_TEX_ROT_SPEED, MOV_TEX_ROT_SCALE, MOV_TEX_4_BOX_TRIS, MOV_TEX_ROT,
    MOV_TEX_ALPHA, MOV_TEX_DEFINE, MOV_TEX_END,
    ROTATE_COUNTER_CLOCKWISE, TEXTURE_WATER
} from "../../../../include/moving_texture_macros"

// 0x07006E4C - 0x07006E7C
const castle_courtyard_movtex_star_statue_water_data = [
    MOV_TEX_INIT_LOAD(   1),
    MOV_TEX_ROT_SPEED(   5),
    MOV_TEX_ROT_SCALE(   3),
    MOV_TEX_4_BOX_TRIS(-656, -2405),
    MOV_TEX_4_BOX_TRIS(-656, -1074),
    MOV_TEX_4_BOX_TRIS( 674, -1074),
    MOV_TEX_4_BOX_TRIS( 674, -2405),
    MOV_TEX_ROT(     ROTATE_COUNTER_CLOCKWISE),
    MOV_TEX_ALPHA(    0x96),
    MOV_TEX_DEFINE(  TEXTURE_WATER),
    MOV_TEX_END(),
].flat();

export const castle_courtyard_movtex_star_statue_water = [
    {id: 0, movtex: castle_courtyard_movtex_star_statue_water_data},
    {id: -1, movtex: null},
];

// 1621915736 - 2021-05-25 23:20:16 -0700
