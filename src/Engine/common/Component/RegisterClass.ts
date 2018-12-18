module MeltEngine {
    export class ClassUtil {

        //根据type获取类型
        public static getClass(ct: ComponentType): any {

            let clas: any = undefined;
            switch (ct) {
                /*-------------------------------------------------------------------------------------------
                |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
                -------------------------------------------------------------------------------------------*/
                //根据类型写上对应的class

                case ComponentType.CT_CAMERA: clas = TCamera; break;
                case ComponentType.CT_LEVEL: clas = TLevel; break;






























                /*-------------------------------------------------------------------------------------------
                |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
                -------------------------------------------------------------------------------------------*/
                default: break;
            }
            return clas;
        }

    }
}