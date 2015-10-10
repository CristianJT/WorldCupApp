

import sys
import os
import shlex


extensions = []


templates_path = ['_templates']

source_suffix = '.rst'

master_doc = 'index'

project = u'World Cup'
copyright = u'2015, Cristian'
author = u'Cristian'


version = '0.1'
release = '0.1'

language = 'es'

exclude_patterns = ['_build']


pygments_style = 'sphinx'

todo_include_todos = False



import sphinx_rtd_theme

html_theme = "sphinx_rtd_theme"

html_theme_path = [sphinx_rtd_theme.get_html_theme_path()]


htmlhelp_basename = 'WorldCupdoc'



latex_documents = [
  (master_doc, 'WorldCup.tex', u'World Cup Documentation',
   u'Cristian', 'manual'),
]

man_pages = [
    (master_doc, 'worldcup', u'World Cup Documentation',
     [author], 1)
]

texinfo_documents = [
  (master_doc, 'WorldCup', u'World Cup Documentation',
   author, 'WorldCup', 'One line description of project.',
   'Miscellaneous'),
]

