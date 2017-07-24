import setuptools

setuptools.setup(
    name="nbsolutions",
    version='0.1.0',
    author="Jacky Lu",
    url="https://github.com/jackylu97/nbsolutions"
    description="Simple Jupyter extension that allows the user to mark cells as 'solution' cells not meant to be viewed by students.",
    packages= ["nbsolutions"],
    install_requires=[
        'notebook',
    ],
    package_data={'nbsolutions': ['static/*']},
)
