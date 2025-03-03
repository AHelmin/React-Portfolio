//use package to create component to display pdf of resume
import React from "react";
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer'
import Resume from '../assets/ResumePortfolio2.28.25.pdf'


export default function ResumeView() {
    const resume = [{ uri: Resume }]


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <DocViewer documents={resume} pluginRenderers={DocViewerRenderers} />
                    </div>
                </div>
            </div>
        </>
    )
}