
module Engine {

    export function _hashcode(str: string): number {

        let hash = 10000;
        if (str.length > 0) {

            for (let i = 0; i < str.length; i++) {
                hash = 31 * hash + str.charCodeAt(i);
            }
        }
        return hash;
    }



}