
import Link from "next/link"

export default function Service1() {
	return (
		<>

			<section id="services" className="section-service-1 pt-120 pb-120">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 text-primary-1">What do I offer?</h3>
						</div>
						{/* <div className="col-lg-auto">
							<Link href="/#contact" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
								Get a Quote
								<i className="ri-arrow-right-up-line" />
							</Link>
						</div> */}
					</div>
					<div className="row mt-6 justify-content-between">
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										{/* <Link href="/work-single"> */}
											<span className="service-number">01. </span>
											Data Analysis
										{/* </Link> */}
									</h3>
									{/* <Link href="" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100"> */}
										<p className="service-card-text my-3 d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
											Specializes in extracting actionable insights using advanced statistical techniques and computational methods. My expertise includes data wrangling, exploratory data analysis, and interpreting results to inform strategic decisions.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									{/* </Link> */}
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										{/* <Link href="/work-single"> */}
											<span className="service-number">02. </span>
											Data Visualization
										{/* </Link> */}
									</h3>
									{/* <Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100"> */}
										<p className="service-card-text my-3 d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
											I excel in creating intuitive and informative visual data representations that enhance understanding and decision-making. Utilizing tools like Matplotlib, Seaborn, and Power BI.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									{/* </Link> */}
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										{/* <Link href="/work-single"> */}
											<span className="service-number">03. </span>
											Machine Learning
										{/* </Link> */}
									</h3>
									{/* <Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100"> */}
										<p className="service-card-text my-3 d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
											I build predictive models that improve efficiency, accuracy, and innovation across various domains. My experience spans from supervised and unsupervised learning to advanced deep and transfer learning techniques.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									{/* </Link> */}
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3 border-bottom">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0">
										{/* <Link href="/work-single"> */}
											<span className="service-number">04. </span>
											Artificial Intelligence
										{/* </Link> */}
									</h3>
									{/* <Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100"> */}
										<p className="service-card-text my-3 d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
											My work in Artificial Intelligence focuses on creating intelligent systems that emulate human capabilities and enhance automation in applications ranging from natural language processing to computer vision.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									{/* </Link> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
