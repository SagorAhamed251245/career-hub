import React from 'react';



const Blog = () => {
    return (
        <>
            <div className='text-center text-3xl font-bold text-blue-500 mb-10'>
                <p>Question And Answer</p>
            </div>

            <div className='   my-3 md:w-3/4 px-5 md:px-0 mx-auto '>
                <p className='font-bold text-2xl mb-5 '>
                    1. When should you use context API?
                </p>
                <p className='font-semibold text-base mb-5 ml-6 w-9/12 '>
                    <span className='text-blue-500 mr-2'>Ans:</span>When a large number of components at various nesting levels require access to a single  data this case context api is usually used. using context api you can share any data among components without having to provide props via each level of the component tree.
                </p>
                {/* 1 */}

                <p className='font-bold text-2xl mb-5 '>
                    2. What is a custom hook ?
                </p>
                <p className='font-semibold text-base mb-5 ml-6 w-9/12 '>
                    <span className='text-blue-500 mr-2'>Ans:</span>
                   it is  React  JavaScript function that starts with the prefix "use" and follows the rules of React hooks. It offers you to reuse stateful logic and distribute it among different parts without having to write duplicate code.
                </p>
                {/* 2 */}
                {/* 3 */}
                <p className='font-bold text-2xl mb-5 '>
                    3. What is useRef ?
                </p>
                <p className='font-semibold text-base mb-5 ml-6 w-9/12 '>
                    <span className='text-blue-500 mr-2'>Ans:</span>it is a built-in React hook . it  accepts only one argument as the initial value and returns a reference.
                </p>
                {/* 4 */}
                <p className='font-bold text-2xl mb-5 '>
                    4. What is useMemo ?
                </p>
                <p className='font-semibold text-base mb-5 ml-6 w-9/12 '>
                    <span className='text-blue-500 mr-2'>Ans:</span>To memoize a function's output, React provides the useMemo hook. In order to improve performance, it caches expensive computations so that they are only recalculated when absolutely necessary.
                </p>

            </div>
        </>
    );
};

export default Blog;
