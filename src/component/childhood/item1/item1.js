// 模拟传递JSX组件

import Avatar from "./Avatar"
export function Content1({children}) {
    return (
        <div style={{color: 'wihte',width: '400px', height: '200px', border: '1px solid red', margin: '10px auto'}}>
            {children}
        </div>
    )
}
export default function Item1() {
    return (
        <Content1>
            <Avatar 
            person={{       // person传入一个对象
                name: 'Katsuko Saruhashi',
                imageId: 'YfeOqp2'
            }} 
            size={200}>
            </Avatar>
            展示传入数据
        </Content1>
    )
}