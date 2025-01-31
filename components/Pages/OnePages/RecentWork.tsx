import Image from "next/image";
import Link from "next/link";
import work1 from "@/public/images/projects/work1.jpg"
import work2 from "@/public/images/projects/work2.jpg"
import work3 from "@/public/images/projects/work3.jpg"
import work4 from "@/public/images/projects/work4.jpg"
import work5 from "@/public/images/projects/work5.jpg"
import work6 from "@/public/images/projects/work6.jpg"

export default function RecentWork() {

  return (
    <div className="projects-area" id="projects">
        <div className="row">
            <div className="col-xl-12 col-lg-12">
                <div className="section-title section-white-title wow fadeInUp delay-0-2s text-center">
                    <h2>Recent Work</h2>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row g-4 portfolio-grid">
                {/* <!-- START SINGLE PORTFOLIO DESIGN AREA --> */}
                <div className="col-md-6 col-xl-6 portfolio-item category-1">
                    <Link href="../../../public/images/projects/work1.jpg" className="work-popup">
                        <div className="portfolio-box">
                            {/* <!-- Image --> */}
                            <Image className="workimges" src={work1} alt="" data-rjs="2" />
                            {/* <!-- Category --> */}
                            <span className="portfolio-category">Branding</span>
                            {/* <!-- Caption --> */}
                            <div className="portfolio-caption">
                                <h1>Glasses of Cocktail</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* <!-- // END SINGLE PORTFOLIO DESIGN AREA --> */}
                {/* <!-- START SINGLE PORTFOLIO DESIGN AREA --> */}
                <div className="col-md-6 col-xl-6 portfolio-item category-2">
                    <Link href="/singleproject">
                        <div className="portfolio-box">
                            {/* <!-- Image --> */}
                            <Image className="workimges" src={work2} alt="" data-rjs="2" />
                            {/* <!-- Category --> */}
                            <span className="portfolio-category">Mockup</span>
                            {/* <!-- Caption --> */}
                            <div className="portfolio-caption">
                                <h1>A Branch with Flowers</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* <!-- // END SINGLE PORTFOLIO DESIGN AREA --> */}
                {/* <!-- START SINGLE PORTFOLIO DESIGN AREA --> */}
                <div className="col-md-6 col-xl-6 portfolio-item category-2">
                    <Link href="https://www.youtube.com/watch?v=qZEPs3vmYB4" className="popup-youtube">
                        <div className="portfolio-box">
                            {/* <!-- Image --> */}
                            <Image className="workimges" src={work3} alt="" data-rjs="2" />
                            {/* <!-- Category --> */}
                            <span className="portfolio-category">Video</span>
                            {/* <!-- Caption --> */}
                            <div className="portfolio-caption">
                                <h1>Orange Rose Flower</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* <!-- // END SINGLE PORTFOLIO DESIGN AREA --> */}
                {/* <!-- START SINGLE PORTFOLIO DESIGN AREA --> */}
                <div className="col-md-6 col-xl-6 portfolio-item category-1">
                    <Link href="assets/images/projects/work4.jpg" className="work-popup">
                        <div className="portfolio-box">
                            {/* <!-- Image --> */}
                            <Image className="workimges" src={work4} alt="" data-rjs="2" />
                            {/* <!-- Category --> */}
                            <span className="portfolio-category">Branding</span>
                            {/* <!-- Caption --> */}
                            <div className="portfolio-caption">
                                <h1>Green Plant on a Desk</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* <!-- // END SINGLE PORTFOLIO DESIGN AREA --> */}
                {/* <!-- START SINGLE PORTFOLIO DESIGN AREA --> */}
                <div className="col-md-6 col-xl-6 portfolio-item category-2">
                    <Link href="assets/images/projects/work5.jpg" className="work-popup">
                        <div className="portfolio-box">
                            {/* <!-- Image --> */}
                            <Image className="workimges" src={work5} alt="" data-rjs="2" />
                            {/* <!-- Category --> */}
                            <span className="portfolio-category">Mockup</span>
                            {/* <!-- Caption --> */}
                            <div className="portfolio-caption">
                                <h1>Orange Rose Flower</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* <!-- // END SINGLE PORTFOLIO DESIGN AREA --> */}
                {/* <!-- START SINGLE PORTFOLIO DESIGN AREA --> */}
                <div className="col-md-6 col-xl-6 portfolio-item category-2">
                    <Link href="assets/images/projects/work6.jpg" className="work-popup">
                        <div className="portfolio-box">
                            {/* <!-- Image --> */}
                            <Image className="workimges" src={work6} alt="" data-rjs="2" />
                            {/* <!-- Category --> */}
                            <span className="portfolio-category">logo</span>
                            {/* <!-- Caption --> */}
                            <div className="portfolio-caption">
                                <h1>Rose Flower</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* <!-- // END SINGLE PORTFOLIO DESIGN AREA --> */}
            </div>
        </div>
    </div>
  )
}
