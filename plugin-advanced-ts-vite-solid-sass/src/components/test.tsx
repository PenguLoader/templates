import { Show, createSignal } from "solid-js"

export default function Test() {
    const [count, setCount] = createSignal(0)
    const [hidden, setHidden] = createSignal(false)

    const getButtonText = () => {
        const v = count()
        return v > 0 ? `Clicked ${v} times!` : 'Click me!'
    }

    return (
        <Show when={!hidden()} >
            <div class="pengu-test-overlay">
                <div class="pengu-test-container">
                    <div class="pengu-test-image" />
                    <div class="pengu-test-left-container">
                        <h1 class="pengu-test-title">
                            Pengu Loader
                            <span style="color: red; padding-left: 5px; padding-right: 5px;" class="emoji">&#10084;</span>
                            Vite
                        </h1>
                        <p class="pengu-test-content">
                            <Show when={process.env.DEV} fallback={
                                <>
                                    Run template in dev mode to see HMR in action!<br />
                                </>
                            }>
                                You can change CSS and TSX in real-time<br />
                                without having to reload LCU at all!<br />
                                Try it now by editing CSS at src/index.css<br />
                                or TSX at src/index.tsx!
                            </Show>
                        </p>
                        <div class="pengu-test-button-container">
                            <button class="pengu-test-button" onClick={() => setCount(count() + 1)}>{getButtonText()}</button>
                            <button class="pengu-test-button" onClick={() => setHidden(true)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </Show>
    )
}
