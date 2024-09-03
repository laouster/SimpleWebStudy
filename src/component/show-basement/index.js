export default function listsComponent( props ) {  // 
    return (
        <div>
            <h1>海蒂·拉玛的待办事项</h1>
            <img 
            src="https://i.imgur.com/yXOvdOSs.jpg" 
            alt="Hedy Lamarr" 
            class="photo"
            />
            <ul>
                <li>发明一种新式交通信号灯</li>
                <li>排练一个电影场景</li>
                <li>改进频谱技术</li>
                <li style={{color: 'red', fontSize: `${props.fontsize}px`}}>{props.Pname}</li>
                {/* 如果要在html中写js代码，需要用双大括号
                    如果要在大括号内再加自定义变量, 使用 `${}`
                */}
            </ul>
        </div>
        )
}
export function Imgur() {
    let className = 'avatar';
    let src = "https://i.imgur.com/7vQD0fPs"
    return (   
        <>
            <img
            className={className}
            src={`${src}.jpg`}  // 这种方式在引用字符串中携带原本的字符串
            alt="Gregorio Y. Zara"
            />
            <p style={{
      backgroundColor: 'black', // 双大括号表示传入的对象, style就是一个对象
      color: 'pink'
    }}>这里会显示一张图片</p>
        </>        
    )
}