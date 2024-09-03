// 入口文件的入口文件
import ListsComponent from "../show-basement/index";
import Item1 from "../childhood/item1/item1";
import Item2 from "../childhood/item2/index"
import Item3 from "../childhood/item3/item3";
import Item4 from "../childhood/item4/item4";
// 具名导出
export function Main(){ // 声明了export才能被导出, 没有带default就是默认导出
    return (
        <div>
            <ListsComponent Pname={'传入的自定义数据'} size={30}/>
        </div>
    )
}

// 默认导出
export default function defaultMain(){
    return (
        <div>
            {/* <Item1/> */}
            {/* <Item2/> */}
            {/* <Item3/> */}
            <Item4/>
        </div>
    )
}