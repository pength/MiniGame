module MeltEngine {

    export class Transform extends Component{

        private mPosition: Vector3 = new Vector3();
        private mRotation: Vector3 = new Vector3();
        private mScale: Vector3 = new Vector3();
        private mScaleLifeTime: number = 0;

        /*-----------------------------------------------------------------------------------------
        |   |   |   |   |   |   |   |   |   Transform
        -----------------------------------------------------------------------------------------*/
        //设置对象的移动距离
        Translate(x: number, y: number, z: number): void {

        }

        //设置对象的位置
        SetPosition(x: number, y: number, z: number): void {
            this.mPosition.x = x;
            this.mPosition.y = y;
            this.mPosition.z = z;
        }

        //获取对象的坐标,值为引擎坐标
        GetPosition(): Vector3 {
            return this.mPosition;
        }

        //设置该对象的旋转，欧拉角
        SetRotation(vRotateX: number, vRotateY: number, vRotateZ: number): void {
            this.mRotation.x = vRotateX;
            this.mRotation.y = vRotateY;
            this.mRotation.z = vRotateZ;
        }

        GetRotation(): Vector3 {
            return this.mRotation;
        }

        //设置对象的缩放
        SetScale(x: number, y: number, z: number, fTime?: number): void {
            this.mScale.x = x;
            this.mScale.y = y;
            this.mScale.z = z;
            this.mScaleLifeTime = fTime;
        }
        
        GetScale(): Vector3 {
            return this.mScale;
        }
        
        /*---------------------------------------------------------------------------------------
        |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   
        -----------------------------------------------------------------------------------------

        /*-----------------------------------------------------------------------------------------
        |   |   |   |   |   |   |   |   |   节点
        -----------------------------------------------------------------------------------------*/
        
        /**
         * 子节点数量
         * @type {number}
         * @memberof ChildObject
         */
        public readonly childCount:number = 0;

        /**
         * 第一个子节点
         * @type {Transform}
         * @memberof Transform
         */
        public readonly child:Transform = undefined;

        /**
         * 父节点
         * @type {Transform}
         * @memberof Transform
         */
        public readonly parent:Transform = undefined;

        /**
         * 子节点数组
         * @private
         * @type {Arrary<Transform>}
         * @memberof Transform
         */
        private _childs:Arrary<Transform> = undefined;

        /**
         * 根据名字查找节点
         * @param {string} name 
         * @returns {Transform} 
         * @memberof Transform
         */
        public Find(name:string):Transform
        {
            if(this._childs == undefined)
                return undefined;

            for(let i = 0; i < this._childs.length; i++)
            {
                if(this._childs[i].name == name)
                    return this.child[i];
            }

            return undefined;
        }

        /**
         * 根据名字查找所有子节点
         * @param {string} name 
         * @returns {Transform} 
         * @memberof Transform
         */
        public FindChild( name:string):Transform
        {
            if(this._childs == undefined)
                return undefined;

            let ts:Transform = this.Find(name);
            if(ts == undefined)
            {
                for(let i = 0; i < this._childs.length; i++)
                {
                    if(this._childs[i].childCount != 0)
                    {
                        ts = this._childs[i].FindChild(name);
                        if(ts != undefined)
                            return ts;
                    }
                }
            }
            return ts;
        }

        /**
         * 根据序列获取节点
         * @param {number} index 
         * @returns {Transform} 
         * @memberof Transform
         */
        public GetChild( index:number) :Transform
        {
            if(this._childs == undefined)
                return undefined;

            return this._childs[index];
        }

        /**
         * 获取子节点数量
         * @returns {number} 
         * @memberof Transform
         */
        public GetChildCount():number
        {
            if(this._childs == undefined)
                return undefined;

            this.childCount = this._childs.length;

            return this.childCount;
        }

        /**
         * 是否已经是子节点了
         * @param {Transform} parent 
         * @returns {bool} 
         * @memberof Transform
         */
        public IsChildOf( parent:Transform):bool
        {
            if(parent == undefined)
                return false;

            if(this._childs == undefined)
                return false;

            for(let i = 0; i < parent.childCount; i++)
            {
                if(parent.GetChild(i) == this)
                    return true;
            }
            return false;
        }

        /**
         * 设置父节点
         * @param {Transform} parent 
         * @param {Transform} worldPositionStays 
         * @memberof Transform
         */
        public SetParent( parent:Transform,  worldPositionStays?:bool)：void
        {
            if(parent == undefined)
                return;

            this.parent = parent;
            if(worldPositionStays == undefined ||worldPositionStays == false)
            {
                this.mPosition.x = 0;
                this.mPosition.y = 0;
                this.mPosition.z = 0;
            }

            parent.addChild(this);

        }

        public AddChild(child:Transform)
        {
            if(this._childs == undefined)
                this._childs = new Arrary<Transform>();

            let result = child.IsChildOf(this);
            if(result)
                return;
            
            this._childs.push(child);

            this.child = this._childs[0];
        }
    }

}