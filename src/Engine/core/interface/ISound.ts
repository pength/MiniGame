module Engine {

    //声音播放接口
    export interface ISound {

        //播放背景音乐
        PlayBGM(url: string, volume: number, followDevice?: boolean): void;

        //播放音效
        PlaySound(url: string, volume: number, followDevice?: boolean): void;
    }
}