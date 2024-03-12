import React, { useState, useEffect } from 'react';
import { getAllReport } from '../services/api'
import Link from 'next/link';

export default function PastReports(props:any) {
    const [reports, setReports] = useState<any>([]);
    const imgurl = process.env.ImgUrl;
    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await getAllReport();
                console.log(response);

                setReports(response);
            } catch (error) {
                console.error('Error fetching reports:', error);
            }
        };
        fetchReports();
    }, []);

    return (
        <div>
            <div className="past-reports-container">
                <h2>Past Reports</h2>
                <ul className="report-list">
                    {reports.map((report: any) => (
                        <li key={report.id + "pastReport"} className="report-item">
                            <Link href={`/reports/${report.id}`}> {/* Link to individual report page */}
                                <a>
                                    {report.name} - {report.timestamp}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

