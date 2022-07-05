// 0x07002E80 - 0x07002F80

import {
    gsSPVertex, gsSP2Triangles, gsSPEndDisplayList, gsDPPipeSync, gsSPClearGeometryMode,
    gsSPDisplayList, gsSPSetGeometryMode,
    G_LIGHTING
} from "../../../../../include/gbi"
const sa_vertex_07002E80 = [
    [[ -3276,   -972,   1075], 0, [     0,      0], [0x00, 0x00, 0xff, 0x40]],
    [[ -3276,  -3122,  -1074], 0, [     0,      0], [0x00, 0x00, 0xff, 0x40]],
    [[ -3276,   -972,  -1074], 0, [     0,      0], [0x00, 0x00, 0xff, 0x40]],
    [[ -3276,  -3122,   1075], 0, [     0,      0], [0x00, 0x00, 0xff, 0x40]],
    [[ -1074,  -3122,  -3276], 0, [     0,      0], [0x00, 0xff, 0x00, 0x40]],
    [[  1075,   -972,  -3276], 0, [     0,      0], [0x00, 0xff, 0x00, 0x40]],
    [[ -1074,   -972,  -3276], 0, [     0,      0], [0x00, 0xff, 0x00, 0x40]],
    [[  1075,  -3122,  -3276], 0, [     0,      0], [0x00, 0xff, 0x00, 0x40]],
    [[  3277,   -972,  -1074], 0, [     0,      0], [0xff, 0x00, 0x00, 0x40]],
    [[  3277,  -3122,  -1074], 0, [     0,      0], [0xff, 0x00, 0x00, 0x40]],
    [[  3277,  -3122,   1075], 0, [     0,      0], [0xff, 0x00, 0x00, 0x40]],
    [[  3277,   -972,   1075], 0, [     0,      0], [0xff, 0x00, 0x00, 0x40]],
    [[ -1074,   -972,   3277], 0, [     0,      0], [0x00, 0xff, 0xff, 0x40]],
    [[  1075,  -3122,   3277], 0, [     0,      0], [0x00, 0xff, 0xff, 0x40]],
    [[ -1074,  -3122,   3277], 0, [     0,      0], [0x00, 0xff, 0xff, 0x40]],
    [[  1075,   -972,   3277], 0, [     0,      0], [0x00, 0xff, 0xff, 0x40]],
];

// 0x07002F80 - 0x07002FD0
const sa_dl_07002F80 = [
    gsSPVertex(sa_vertex_07002E80, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 12, 15, 13, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07002FD0 - 0x07003000
export const sa_seg7_dl_07002FD0 = [
    gsDPPipeSync(),
    gsSPClearGeometryMode(G_LIGHTING),
    gsSPDisplayList(sa_dl_07002F80),
    gsDPPipeSync(),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 2022-07-04 22:02:29 -0400 (Convert.rb 2022-07-03 12:20:08 -0400)
