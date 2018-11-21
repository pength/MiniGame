module Engine {

    //射线
    export class Ray {
        public mOrigin: Vector3;
        public mDirection: Vector3;
    };

    //射线查询优先级
    export enum RayQueryLevel {
        RQL_BEGIN = 0,
        RQL_UNKNOWN = RQL_BEGIN,

        RQL_ITEMBOX = 1,
        RQL_ENEMY_PLAYER = 2,
        RQL_ENEMY_NPC = 3,
        RQL_PLATFORM = 4,
        RQL_ALLY_NPC = 5,
        RQL_ALLY_PLAYER = 6,
        RQL_PET = 7,
        RQL_CORPSE = 8,
        RQL_PLAYER_SELF = 9,

        ERQL_END = 10,
    };

    //对象类型
    export enum ObjectType {
        OT_DEFAULT = 0,
        OT_DUMMY = OT_DEFAULT, //默认
        OT_STATIC,             //静态物件
        OT_DYNAMIC,            //动态物件
        OT_SKILL,              //技能
        OT_EFFECT,             //特效
        OT_AUDIO,              //声音
        OT_END,
    };

    //坐标
    export enum AxisType {
        EXT_DEFAULT = 0,
        EXT_GAME,
        EXT_ENGINE,
        EXT_SCREEN,
        EXT_END,
    };

    export enum CharacterPart  {
        CP_DEFAULT,
        CP_LEFT_WEAPON,
        CP_RIGHT_WEAPON,
        CP_HAIR,
        CP_BODY,
        CP_FACE,

        CP_END
    };

}
