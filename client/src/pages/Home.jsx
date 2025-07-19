import React, { useState, useEffect } from 'react'
import { Card, FormField, Loader } from '../components'

const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
        return (
            data.map((post) => <Card key={post._id} {...post} />)
        );
    }

    return (
        <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
    );
};

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);

            try {
                const response = await fetch('http://localhost:8000/api/v1/post', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const result = await response.json();
                    setAllPosts(result.data.reverse());
                }
            } catch (error) {
                alert(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        setSearchTimeout(
            setTimeout(() => {
                const searchResult = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));
                setSearchedResults(searchResult);
            }, 500),
        );
    };

    return (
        <section className='max-w-7xl mx-auto'>
            <div className='justify-center text-center'>
                {/* <h1 className='font-extrabold text-[#222328] text-2xl sm:text-5xl'>Text-to-Image Generator</h1>
                <p className='mt-3 text-[#666e75]  text-[16px]'>
                Dive into a world of imagination with our Text-to-Image Generator. Explore captivating visuals crafted effortlessly. Click "Create" to unleash your creativity!
                </p> */}


                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Text-to-Image</span> AI Generator.</h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Dive into a world of imagination with our Text-to-Image Generator. Explore captivating visuals crafted effortlessly. Click "Create" to unleash your creativity!</p>
            </div>

            <div className='mt-14'>
                <FormField
                    labelName="Search Posts"
                    type="text"
                    name="text"
                    placeholder="Search something..."
                    value={searchText}
                    handleChange={handleSearchChange}
                    className="rounded-full border-2 border-blue-500 px-5 py-3 w-full text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-all duration-300 ease-in-out"
                />
            </div>


            <div className='mt-10'>
                {loading ? (
                    <div className='flex justify-center items-center'>
                        <Loader />
                    </div>
                ) : (
                    <>
                        {searchText && (
                            <h2 className='font-medium text-xl mb-3 text-[#666e75] '>Showing results for <span className='text-[#222328]'>{searchText}</span> </h2>
                        )}

                        <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
                            {searchText ? (
                                <RenderCards
                                    data={searchedResults}
                                    title="No Search Results Found"
                                />
                            ) : (
                                <RenderCards
                                    data={allPosts}
                                    title="No Posts Yet"
                                />
                            )}

                        </div>
                    </>
                )}
            </div>

        </section>
    )
}

export default Home
