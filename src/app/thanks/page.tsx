export default function Thanks({searchParams} : {searchParams: {to: string}}){
  return(
    <section className="grid place-items-center my-20 gap-2.5">
    <h1 className="text-4xl font-semibold">Thanks for your message{searchParams.to? " "+searchParams.to : ''}.</h1>
    <h2 className="text-2xl opacity-90">I will reply as soon as i can :D</h2>
    </section>
  )
}