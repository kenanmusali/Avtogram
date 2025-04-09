import React from 'react';
import { useSelector } from 'react-redux';
import { fileOrigin } from '../utils/origin';

function Files() {
    const data = useSelector((state) => state.data);

    return (
        <div className="files-container">
            {data.fileList?.length ? (
                data.fileList.map((file) => (
                    <div
                        key={file.id}
                        className="file-card"
                    >
                        {file.type === 'video' ? (
                            <video
                                controls
                                className="media-content"
                            >
                                <source
                                    src={`${fileOrigin}${file.filePath}`}
                                />
                            </video>
                        ) : (
                            <img
                                src={`${fileOrigin}${file.filePath}`}
                                alt=""
                                className="media-content"
                            />
                        )}
                    </div>
                ))
            ) : (
                <div className="no-files-message">
                    No files yet
                </div>
            )}
        </div>
    );
}

export default Files;