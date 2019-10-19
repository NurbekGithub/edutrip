import React from "react"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import { TabletWidth } from "../../utils/globalStyleObjects"
import "pure-react-carousel/dist/react-carousel.es.css"
import Feedback from "../Feedback"
import FeedbackModal from "../FeedbackModal"
import { useMediaPredicate } from "react-media-hook"

function Feedbacks({ slides }) {
  const minWidthTablet = useMediaPredicate(`(min-width: ${TabletWidth}px)`)
  return (
    <section className="container mx-auto py-12 relative">
      <div className="carousel-wrapper">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={slides.length}
        >
          <div className="relative h-12 mb-8 leading-snug">
            {minWidthTablet && (
              <h2 className="text-4xl uppercase font-extrabold text-center">
                Отзывы
              </h2>
            )}
            <div className="absolute top-0 right-0">
              <FeedbackModal />
              <ButtonBack className="bg-gray-400 text-white hover:bg-teal-400 w-12 h-12 text-2xl font-bold rounded-full mr-2">
                &lt;
              </ButtonBack>
              <ButtonNext className="bg-gray-400 text-white hover:bg-teal-400 w-12 h-12 text-2xl font-bold rounded-full">
                &gt;
              </ButtonNext>
            </div>
          </div>

          <Slider>
            {slides.map((slide, idx) => (
              <Slide key={idx} index={idx}>
                <div className="flex -mx-2">
                  {slide.map(({ node: feed }, idx) => (
                    <Feedback
                      key={idx}
                      name={feed.name}
                      updatedAt={feed.updatedAt}
                      text={feed.feedbackText.feedbackText}
                      imgFluid={feed.userImage.fluid}
                    />
                  ))}
                </div>
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      </div>
    </section>
  )
}

export default Feedbacks
