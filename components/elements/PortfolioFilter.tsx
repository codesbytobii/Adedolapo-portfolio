'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter() {
	// Isotope
	const isotope = useRef<Isotope | null>(null)
	const [filterKey, setFilterKey] = useState<string>("*")

	useEffect(() => {
		const timeout = setTimeout(() => {
			isotope.current = new Isotope(".masonry-active", {
				itemSelector: ".filter-item",
				percentPosition: true,
				masonry: {
					columnWidth: ".filter-item",
				},
			})
		}, 1000)

		// Cleanup on unmount
		return () => clearTimeout(timeout)
	}, [])

	useEffect(() => {
		if (isotope.current) {
			isotope.current.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` })
		}
	}, [filterKey])

	const handleFilterKeyChange = useCallback((key: string) => () => {
		setFilterKey(key)
	}, [])

	const activeBtn = (value: string) => (value === filterKey ? "active btn btn-md btn-filter mb-2 me-2 text-uppercase" : "btn btn-md btn-filter mb-2 me-2 text-uppercase")

	return (
		<>

			<div className="container">
				<div className="text-start">
					<div className="button-group filter-button-group filter-menu-active">
						<button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All Projects</button>
						<button className={activeBtn("analysis")} onClick={handleFilterKeyChange("analysis")}>Data Analysis</button>
						<button className={activeBtn("datavisual")} onClick={handleFilterKeyChange("datavisual")}>Data Visualization</button>
						<button className={activeBtn("ml")} onClick={handleFilterKeyChange("ml")}>ML/AI</button>
					</div>
				</div>
				<div className="row masonry-active justify-content-between mt-6">
					<div className="grid-sizer" />
					<div className="filter-item col-lg-6 col-12 analysis datavisual ml">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/car-price-prediction">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/car-1.png" alt="infinia" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/car-price-prediction" className="project-card-content">
									<h3 className="fw-semibold">Car Price Prediction</h3>
									{/* <p>Tech Innovators Inc.</p> */}
								</Link>
								<Link href="/work-single" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 analysis datavisual">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/accident-and-emergency-analysis">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/accident.png" alt="infinia" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/accident-and-emergency-analysis" className="project-card-content">
									<h3 className="fw-semibold">Accident and Emergency Analysis</h3>
									{/* <p>Tech Innovators Inc.</p> */}
								</Link>
								<Link href="/accident-and-emergency-analysis" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 ml">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/yoruba-proverb-generator">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/translator.png" alt="infinia" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/yoruba-proverb-generator" className="project-card-content">
									<h3 className="fw-semibold">Yoruba Proverb Generator</h3>
									{/* <p>HealthTrack Solutions</p> */}
								</Link>
								<Link href="/yoruba-proverb-generator" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 ml">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/spotting-facial-expressions">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/facial.png" alt="infinia" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/spotting-facial-expressions" className="project-card-content">
									<h3 className="fw-semibold">Spotting Facial Expressions</h3>
									{/* <p>Creative Pulse Studios</p> */}
								</Link>
								<Link href="/spotting-facial-expressions" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
