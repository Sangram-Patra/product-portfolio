import Image from 'next/image'
import Link from 'next/link'
import blog1 from '@/public/images/blog/blog1.jpg'
import blog2 from '@/public/images/blog/blog2.jpg'
import blog3 from '@/public/images/blog/blog3.jpg'

export default function Stories() {
  return (
    <section id="blog" className="blog-area">
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <div className="section-title section-white-title wow fadeInUp delay-0-2s">
                        <h2>Stories</h2>
                    </div>
                </div>
            </div>
            {/* <!-- START SINGLE VLOG DESIGN AREA --> */}
            <div className="row ">
                <div className="col-md-6 col-lg-4">
                    <div className="blog-post-box">
                        <div className="blog-post-img">
                            <Link href="/blogdetails">
                                <Image className='bimages' src={blog1} alt="" />
                            </Link>
                            <div className="blog-post-category">
                                <Link href="#">Help</Link>
                            </div>
                        </div>
                        <div className="blog-post-caption">
                            <h3>Posted on Aug 28</h3>
                            <h2><Link className="link-decoration" href="/blogdetails">Create a Landing Page That Performs Great</Link></h2>
                            <Link className="theme-btn" href="/blogdetails">Read more <i className="ri-arrow-right-line"></i></Link>
                        </div>
                    </div>
                </div>
               <div className="col-md-6 col-lg-4">
                    <div className="blog-post-box">
                        <div className="blog-post-img">
                            <Link href="/blogdetails">
                                <Image className='bimages' src={blog2} alt="" />
                            </Link>
                            <div className="blog-post-category">
                                <Link href="#">Help</Link>
                            </div>
                        </div>
                        <div className="blog-post-caption">
                            <h3>Posted on Aug 28</h3>
                            <h2><Link className="link-decoration" href="/blogdetails">Starting and a Career in Web Design</Link></h2>
                            <Link className="theme-btn" href="/blogdetails">Read more <i className="ri-arrow-right-line"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="blog-post-box">
                        <div className="blog-post-img">
                            <Link href="/blogdetails">
                                <Image className='bimages' src={blog3} alt="" />
                            </Link>
                            <div className="blog-post-category">
                                <Link href="#">Help</Link>
                            </div>
                        </div>
                        <div className="blog-post-caption">
                            <h3>Posted on Aug 28</h3>
                            <h2><Link className="link-decoration" href="/blogdetails">Starting and a Career in Web Design</Link></h2>
                            <Link className="theme-btn" href="/blogdetails">Read more <i className="ri-arrow-right-line"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- // END SINGLE VLOG DESIGN AREA --> */}
        </div>
    </section>
  )
}
