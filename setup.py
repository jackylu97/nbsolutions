import setuptools

setuptools.setup(
    name="nbsolutions",
    version='0.1.0',
    author="Jacky Lu",
    description="",
    packages= ["nbsolutions"],
    install_requires=[
        'notebook',
    ],
    package_data={'nbsolutions': ['static/*']},
)
