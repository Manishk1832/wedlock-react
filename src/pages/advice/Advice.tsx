import AdviceCard from "../../components/AdviceCard/AdviceCard";



const adviceCardData = [
  {
    imageSrc: '/Advice-1.jpg',
    title: 'Attraction vs. Compatibility',
    hoverContent: `Attraction can be instant and exciting, drawing two people together through physical appeal or an emotional connection. However, true compatibility goes deeper—it’s the glue that keeps a relationship thriving over time. Compatibility is about aligning on key life aspects such as values, long-term goals, lifestyles, and emotional needs. For example, you might feel attracted to someone’s charm or humour, but compatibility ensures you share common ground on crucial topics like financial planning, family values, or future aspirations.
A successful relationship balances attraction with compatibility. Attraction may fluctuate, but compatibility fosters stability and mutual respect, helping partners weather challenges together. At Wedlock Australia, we prioritise compatibility in our matchmaking by using advanced AI to consider personality traits, interests, and goals, ensuring you connect with someone who truly complements you beyond the initial spark.
`,
  },
  {
    imageSrc: '/Advice-2.jpg',
    title: 'Finding Yourself First',
    hoverContent: `Before you can form a strong relationship with someone else, you need to have a clear understanding of who you are. Self-awareness forms the foundation of a healthy partnership. It’s about recognising your values, passions, and life goals while identifying what you want and need in a partner. Ask yourself questions like: What makes me happy? What are my non-negotiables in a relationship?
When you have a strong sense of self, you bring confidence and clarity to a relationship. You’re less likely to settle for less or lose yourself trying to meet someone else’s expectations. Invest in your personal growth by pursuing hobbies, learning new skills, and building a fulfilling life on your own. At Wedlock Australia, we support you in this journey by encouraging self-reflection and helping you identify the qualities that matter most in a partner, ensuring your relationship starts on a solid foundation.
`,
  },
  {
    imageSrc: '/Advice-3.jpg',
    title: 'Effective Communication in Relationships',
    hoverContent:  `Effective communication isn’t just about talking; it’s about connecting. Communication allows couples to build trust, resolve conflicts, and understand each other’s needs and perspectives. Good communication involves active listening—truly hearing your partner without interrupting or dismissing their feelings. It also requires honesty, vulnerability, and the courage to share your emotions, even when it feels uncomfortable.
Misunderstandings are inevitable, but how you navigate them defines the strength of your relationship. Avoid blame and focus on solutions, using "I" statements to express your feelings without accusing your partner. For example, say, “I feel hurt when you cancel plans without notice” instead of, “You’re always unreliable.”

Wedlock Australia recognises the importance of communication and provides advice on fostering constructive conversations. From setting boundaries to discussing long-term goals, we empower couples to grow together by mastering the art of meaningful dialogue.
`,
  },
  {
    imageSrc: '/Advice-4.jpg',
    title: 'Setting Realistic Expectations',
    hoverContent: `It’s natural to have a vision of your ideal partner, but rigid expectations can prevent you from recognising genuine connections. A healthy relationship thrives on realistic expectations, rooted in mutual respect, shared values, and open-mindedness. While it’s important to uphold your standards, remember that no one is perfect—including you.
Rather than focusing on superficial traits like looks or status, prioritise qualities like kindness, emotional intelligence, and compatibility in life goals. At the same time, recognise that relationships require effort and compromise. For example, one partner might need more alone time while the other craves constant connection. Learning to balance these differences can strengthen your bond.
Wedlock Australia encourages you to set achievable goals for your relationships and embrace imperfections, helping you build a partnership that balances dreams with practical realities.
`,
  },
  {
    imageSrc: '/Advice-5.jpg',
    title: 'Building Emotional Intimacy ',
    hoverContent:  `Emotional intimacy is what transforms a relationship from superficial to profound. It’s about creating a safe space where both partners feel seen, heard, and valued. This level of connection requires vulnerability—sharing your fears, dreams, and deepest thoughts without fear of judgment.
To build emotional intimacy, prioritise quality time together. Engage in activities that promote connection, such as meaningful conversations, shared hobbies, or moments of quiet companionship. Express appreciation regularly to make your partner feel cherished, and practice empathy by validating their feelings, even if you don’t fully understand them.
Building emotional intimacy takes time and patience, but the rewards are immense—a stronger bond, greater trust, and a relationship that can weather any storm. At Wedlock Australia, we provide tools and guidance to help couples cultivate emotional closeness, turning initial matches into lifelong partnerships.
`, 
  },
  {
    imageSrc: '/Advice-6.jpg',
    title: `How to Know if They're ‘The One’`,
    hoverContent: `Determining if someone is “The One” isn’t about waiting for a perfect person or a magical moment; it’s about recognising a sense of alignment and ease in the relationship. The right partner is someone who makes you feel safe, valued, and inspired to be your best self. They support your goals, celebrate your achievements, and stand by you during challenges.
Pay attention to how your potential partner communicates, resolves conflicts, and aligns with your values. Do they share your vision for the future? Do they respect your individuality and encourage your growth? Trust your instincts while considering practical compatibility—shared life goals, family expectations, and mutual respect are key indicators of a lasting relationship.
Wedlock Australia helps you identify these qualities through personalised matchmaking, ensuring you connect with someone who feels like the perfect fit for your unique journey.
`, 
  }
];





const Advice = () => {
  return (
      <div className="pt-[32.5px] font-lato ">
        <div className=" px-4  sm:px-20 py-[80px]">
          <div className="py-16 space-y-8 xl:px-6 2xl:px-28">
            <h1 className="text-[56px] font-bold leading-[60px] tracking-[2%]"
                style={{fontFamily: 'Proxima-Nova-regular'}}>Your Guide to Finding Perfect Matrimonial Match and Building Strong Relationships</h1>
            <p className="text-[#42526B] w-[24rem] sm:w-[40rem] leading-[26px] text-[18px]"
               style={{fontFamily: 'Proxima-Nova-Regular'}}>
             Building meaningful relationships starts with self-awareness, trust, and open communication. Wedlock Australia provides insights to help you navigate challenges, foster emotional intimacy, and create lasting connections aligned with your values.

            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 xl:px-6 2xl:px-28">
{/* 
            <div
                className="rounded border-2  border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-[8px]">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-[24px] leading-[32px] font-normal"
                  style={{fontFamily: 'Proxima-Nova-Regular'}}>Attraction vs. Compatibility </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
            <div
                className="rounded border-2 gap-64 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-[8px]">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-2xl">Finding Yourself First </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
            <div
                className="rounded border-2 mt-[72px] border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-[8px]">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-2xl">Effective Communication in Relationships</h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
            <div
                className="rounded border-2 mt-[72px] border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-[8px]">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-2xl">Setting Realistic Expectations</h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
            <div
                className="rounded border-2 mt-[72px] border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-[8px]">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-2xl">Building Emotional Intimacy </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
            <div
                className="rounded border-2 mt-[72px] border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-[8px]">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-2xl">How to Know if They're ‘The One’ </h1>
              <div className="text-[#007EAF] underline pb-3 text-[16px]">
                <h1>Read More →</h1>
              </div>
            </div> */}

            {adviceCardData.map((card, index) => (
              <AdviceCard
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                hoverContent={card.hoverContent}
              />
            ))}


          </div>
        </div>
        {/* attration */}

        {/* <div className="bg-[#F5F6F7]   lg:px-20 py-[124px]">
          <div className="text-center space-y-10">
            <h1 className="text-[56px] font-bold leading-[60px] tracking-[-2%]"
                style={{fontFamily: 'Proxima-Nova-regular'}}>Attraction vs. Compatibility</h1>
            <p className="text-[18px] leading-[26px] text-[#42526B] font-normal"
               style={{fontFamily: 'Proxima-Nova-regular'}}>
              Attraction may spark a connection, but long-term compatibility is essential for a healthy
              relationship. <br/> Our AI helps you find someone with similar values, goals, and lifestyle preferences.
            </p>
          </div>
          <div className="grid grid-cols-3   px-[7rem]  ">
            <div className="rounded  px-2 space-y-8 w-[380.6px] h-[596px] ">
              <img src="/ProjectPh.svg" alt="" className="w-[380px] h-[464px] "/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
            <div className="rounded  px-2 space-y-8 w-[380.6px] h-[596px] ">
              <img src="/ProjectPh.svg" alt="" className="w-[380px] h-[464px]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
            <div className="rounded  px-2 space-y-8 w-[380.6px] h-[596px] ">
              <img src="/ProjectPh.svg" className="w-[380px] h-[464px]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
          </div>
        </div> */}

        {/* attration end */}

        {/* finding */}
        {/* <div className="py-[80px]   px-[2.5rem]">
          <div className="py-16 text-center space-y-8 xl:px-10 2xl:px-40">
            <h1 className="text-[56px] font-bold leading-[60px] tracking-[2%]"
                style={{fontFamily: 'Proxima-Nova-regular'}}>Finding Yourself First</h1>
            <p className="text-[#42526B] text-[18px] leading-[26px]" style={{fontFamily: 'Proxima-Nova-regular'}}>
              Before seeking a partner, invest time in understanding yourself—your goals, passions, and non-negotiables.
              A strong self-identity is crucial for a thriving relationship.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 xl:px-10 2xl:px-32">
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>


          </div>
        </div> */}

        {/*3.	Effective Communication in Relationships*/}
        {/* <div className="py-[80px]   px-[2.5rem]">
          <div className="py-16 text-center space-y-8 xl:px-10 2xl:px-40">
            <h1 className="text-[56px] font-bold leading-[60px] tracking-[2%]"
                style={{fontFamily: 'Proxima-Nova-regular'}}>Effective Communication in Relationships</h1>
            <p className="text-[#42526B] text-[18px] leading-[26px]" style={{fontFamily: 'Proxima-Nova-regular'}}>
              Good communication is the foundation of any relationship. Be honest, listen actively,
              and express yourself clearly to build a deeper connection with your partner.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 xl:px-10 2xl:px-32">
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>


          </div>
        </div> */}

        {/*4.	Setting Realistic Expectations*/}
        {/* <div className="py-[80px]   px-[2.5rem]">
          <div className="py-16 text-center space-y-8 xl:px-10 2xl:px-40">
            <h1 className="text-[56px] font-bold leading-[60px] tracking-[2%]"
                style={{fontFamily: 'Proxima-Nova-regular'}}>Setting Realistic Expectations</h1>
            <p className="text-[#42526B] text-[18px] leading-[26px]" style={{fontFamily: 'Proxima-Nova-regular'}}>
              It’s important to have standards, but be open to compromise. No one is perfect,
              and flexibility can often lead to unexpected yet beautiful relationships.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 xl:px-10 2xl:px-32">
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>


          </div>
        </div> */}

        {/*5.	Building Emotional Intimacy*/}
        {/* <div className="py-[80px]   px-[2.5rem]">
          <div className="py-16 text-center space-y-8 xl:px-10 2xl:px-40">
            <h1 className="text-[56px] font-bold leading-[60px] tracking-[2%]"
                style={{fontFamily: 'Proxima-Nova-regular'}}>Building Emotional Intimacy</h1>
            <p className="text-[#42526B] text-[18px] leading-[26px]" style={{fontFamily: 'Proxima-Nova-regular'}}>
              Emotional intimacy grows over time. Focus on trust, mutual respect, and shared experiences to strengthen the bond between you and your partner.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 xl:px-10 2xl:px-32">
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>


          </div>
        </div> */}

        {/*6.	How to Know if They're ‘The One’*/}
        {/* <div className="py-[80px]   px-[2.5rem]">
          <div className="py-16 text-center space-y-8 xl:px-10 2xl:px-40">
            <h1 className="text-[56px] font-bold leading-[60px] tracking-[2%]"
                style={{fontFamily: 'Proxima-Nova-regular'}}>How to Know if They're ‘The One’</h1>
            <p className="text-[#42526B] text-[18px] leading-[26px]" style={{fontFamily: 'Proxima-Nova-regular'}}>
              Finding the right partner takes time. Look for someone who aligns with your values, complements your lifestyle, and makes you feel secure and loved.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 xl:px-10 2xl:px-32">
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>


          </div>
        </div> */}


        {/*7.	Handling Rejection with Grace*/}
        {/* <div className="py-[80px]   px-[2.5rem]">
          <div className="py-16 text-center space-y-8 xl:px-10 2xl:px-40">
            <h1 className="text-[56px] font-bold leading-[60px] tracking-[2%]"
                style={{fontFamily: 'Proxima-Nova-regular'}}>Handling Rejection with Grace </h1>
            <p className="text-[#42526B] text-[18px] leading-[26px]" style={{fontFamily: 'Proxima-Nova-regular'}}>
              Rejection is part of the dating journey. Learn to view it as a stepping stone towards finding someone who truly matches your needs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 xl:px-10 2xl:px-32">
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>


          </div>
        </div> */}


        {/*8.	The Role of Family and Friends in Your Relationship*/}
        {/* <div className="py-[80px]   px-[2.5rem]">
          <div className="py-16 text-center space-y-8 xl:px-10 2xl:px-40">
            <h1 className="text-[56px] font-bold leading-[60px] tracking-[2%]"
                style={{fontFamily: 'Proxima-Nova-regular'}}>The Role of Family and Friends in Your Relationship</h1>
            <p className="text-[#42526B] text-[18px] leading-[26px]" style={{fontFamily: 'Proxima-Nova-regular'}}>
              While relationships are personal, involving close family and friends can provide important perspectives and support during your matchmaking journey.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 xl:px-10 2xl:px-32">
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>


          </div>
        </div> */}


        {/*9.	Dealing with Long-Distance Relationships*/}
        {/* <div className="py-[80px]   px-[2.5rem]">
          <div className="py-16 text-center space-y-8 xl:px-10 2xl:px-40">
            <h1 className="text-[56px] font-bold leading-[60px] tracking-[2%]"
                style={{fontFamily: 'Proxima-Nova-regular'}}>Dealing with Long-Distance Relationships</h1>
            <p className="text-[#42526B] text-[18px] leading-[26px]" style={{fontFamily: 'Proxima-Nova-regular'}}>
              Long-distance relationships can work with the right foundation. Trust, consistent communication, and setting realistic expectations are key.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 xl:px-10 2xl:px-32">
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>


          </div>
        </div> */}


        {/*10.	Maintaining Individuality in a Relationship*/}
        {/* <div className="py-[80px]   px-[2.5rem]">
          <div className="py-16 text-center space-y-8 xl:px-10 2xl:px-40">
            <h1 className="text-[56px] font-bold leading-[60px] tracking-[2%]"
                style={{fontFamily: 'Proxima-Nova-regular'}}>Maintaining Individuality in a Relationship</h1>
            <p className="text-[#42526B] text-[18px] leading-[26px]" style={{fontFamily: 'Proxima-Nova-regular'}}>
              While it’s important to grow together, maintaining your sense of self is equally important. Continue to nurture your hobbies,
              friendships, and personal goals alongside your relationship.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 xl:px-10 2xl:px-32">
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>


          </div>
        </div> */}


        {/*11.	Hindu Matchmaking*/}
        {/* <div className="py-[80px]   px-[2.5rem]">
          <div className="py-16 text-center space-y-8 xl:px-10 2xl:px-40">
            <h1 className="text-[56px] font-bold leading-[60px] tracking-[2%]"
                style={{fontFamily: 'Proxima-Nova-regular'}}>Hindu Matchmaking</h1>
            <p className="text-[#42526B] text-[18px] leading-[26px]" style={{fontFamily: 'Proxima-Nova-regular'}}>
              Compatibility is key in Hindu relationships, and horoscope matching (Kundali) is an important step.
              Our platform provides an option to consider astrological compatibility to ensure harmony and alignment with traditional practices.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 xl:px-10 2xl:px-32">
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>


          </div>
        </div> */}


        {/*12.	Muslim Matchmaking*/}
        {/* <div className="py-[80px]   px-[2.5rem]">
          <div className="py-16 text-center space-y-8 xl:px-10 2xl:px-40">
            <h1 className="text-[56px] font-bold leading-[60px] tracking-[2%]"
                style={{fontFamily: 'Proxima-Nova-regular'}}>Muslim Matchmaking</h1>
            <p className="text-[#42526B] text-[18px] leading-[26px]" style={{fontFamily: 'Proxima-Nova-regular'}}>
              Family involvement is highly valued in Muslim communities. Respecting cultural norms,
              such as ensuring compatibility with religious beliefs, can help form a stable foundation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 xl:px-10 2xl:px-32">
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>


          </div>
        </div> */}


        {/*13.	Christian Matchmaking*/}
        {/* <div className="py-[80px]   px-[2.5rem]">
          <div className="py-16 text-center space-y-8 xl:px-10 2xl:px-40">
            <h1 className="text-[56px] font-bold leading-[60px] tracking-[2%]"
                style={{fontFamily: 'Proxima-Nova-regular'}}>Christian Matchmaking</h1>
            <p className="text-[#42526B] text-[18px] leading-[26px]" style={{fontFamily: 'Proxima-Nova-regular'}}>
              Shared values, such as faith and commitment, are often central to Christian relationships.
              Open communication about religious practices and future family expectations is encouraged.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 xl:px-10 2xl:px-32">
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>


          </div>
        </div> */}


        {/*14.	Jewish Matchmaking*/}
        {/* <div className="py-[80px]   px-[2.5rem]">
          <div className="py-16 text-center space-y-8 xl:px-10 2xl:px-40">
            <h1 className="text-[56px] font-bold leading-[60px] tracking-[2%]"
                style={{fontFamily: 'Proxima-Nova-regular'}}>Jewish Matchmaking</h1>
            <p className="text-[#42526B] text-[18px] leading-[26px]" style={{fontFamily: 'Proxima-Nova-regular'}}>
              Religious observance and cultural practices are vital in Jewish matchmaking. Emphasising shared values and traditions helps create strong bonds.


            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 xl:px-10 2xl:px-32">
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>
            <div
                className="rounded border-2 border-[#E6E8EC] hover:border-none  hover:shadow-2xl px-4 space-y-8">
              <img src="/ProjectPh.svg" alt="" className="xl:w-[100%]"/>
              <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
              <div className="text-[#007EAF] underline pb-3">
                <h1>Read More →</h1>
              </div>
            </div>


          </div>
        </div> */}


        {/* finding end */}
      </div>
  );
}

export default Advice
