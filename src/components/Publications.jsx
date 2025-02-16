import React, { useEffect, useState } from 'react'

const Publications = ({publicationsRef}) => {
    const [publications, setPublications] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const orcidID = '0009-0000-1572-5555'
    useEffect(() => {
        const fetchPublications = async () => {
            try {
                const publications = await fetch(`https://pub.orcid.org/v3.0/${orcidID}/works` ,{
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                }})
                const data = await publications.json()
                console.log(data)
                setPublications(data.group || [])
            } catch (error) {
                console.log(error)
            }finally{
                setIsLoading(false)
            }
        }
        fetchPublications()

    },[orcidID])

  return (
    <div className='mx-10 py-16' ref={publicationsRef}>
      <h2 className='text-3xl font-light tracking-widest text-gray-700'>PUBLICATIONS</h2>

      <ul className='flex flex-col gap-2 mt-20'>
        {!isLoading && (
            publications.length > 0 ? (
                publications.map((publications, index) => (
                    <li key={index} className='border-b last:border-b-0 border-gray-300 pb-2'>
                        <a target='_blank' href={publications['work-summary'][0]['url']?.value || "#"}>
                            <h3 className='text-lg'>
                                {publications['work-summary'][0]['title']?.title?.value || "Untitled publication"}
                            </h3> 
                        </a>
                        
                        <h4 className='mt-1 text-gray-500 text-sm'>
                            {publications['work-summary'][0]['publication-date']?.year?.value || "Unknown Date"}
                        </h4>
                        <h4 className='mt-1 text-gray-500 text-sm'>
                            {publications['work-summary'][0]['journal-title']?.value || "Unknown Date"}
                        </h4>
                    </li>
                )))
            : (<p>No publications found</p>)
        )}
      </ul>
    </div>
  )
}

export default Publications
