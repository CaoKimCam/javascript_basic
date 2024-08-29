export default function html([first, ...strings], ...values){
    return values.reduce(
        (acc, cur)=>acc.concat(cur, strings.shift()),
        [first]
    )
    .filter( x => x && x!== true || x===0)
    .join('');
}


export function createStore(reducer){
    let state = reducer()
    const roots = new Map();

    function render(){
        for (const [root, component] of roots){
            const output = component()
            root.innerHTML = output
        }
    }

    return{
        // gắn một component vào 1 phần tử DOM và render nó
        attach(component, root){
            roots.set(root, component)
            render()
        },
        // Kết nối một component với trạng thái,
        // cho phép component truy cập và sử dụng trạng thái của ứng dụng
        connect(selector=state=>state){
            return component => (props, ...args)=>
                component(Object.assign({}, props, selector(state), ...args))
        },
        // cập nhậ trạng thái ứng dụng dựa trên action và render lại giao diện
        dispatch(action, ...args){
            state = reducer(state, action, args)
            render()
        } 
    } 
}