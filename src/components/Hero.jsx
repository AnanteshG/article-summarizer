const Hero = () => {
  return (
    <header className='w-full flex flex-col justify-center items-center'>
      <nav className='flex justify-between items-center flex-row w-full mb-10 pt-3'>

      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with a tool that condenses lengthy articles into concise summaries for easier comprehension.
      </h2>
    </header>
  )
}

export default Hero
