import Link from "next/link"

interface StyleType {
   page: string;
   style: boolean;
}

const Breadcrumbs = ({ page, style }: StyleType) => {
    return (
        <div className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-content">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li className={`breadcrumb-item ${style?"":"active"}`} aria-current="page">{page}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumbs
