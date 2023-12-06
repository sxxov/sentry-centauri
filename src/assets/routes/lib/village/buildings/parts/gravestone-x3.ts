import gravestone_x3_bin from './gravestone-x3.bin?url';
import walls_color_jpg from './walls_color.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_emissive_strength",
		"KHR_materials_specular",
		"KHR_materials_ior"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "Gravestone.009",
			"rotation": [
				0,
				0.8809661269187927,
				0,
				0.47317934036254883
			],
			"scale": [
				0.6778427958488464,
				0.6778427362442017,
				0.6778427958488464
			],
			"translation": [
				55.87238693237305,
				20.435741424560547,
				-1.6985864639282227
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"emissiveFactor": [
				1,
				1,
				1
			],
			"emissiveTexture": {
				"index": 0
			},
			"extensions": {
				"KHR_materials_emissive_strength": {
					"emissiveStrength": 4.299999713897705
				},
				"KHR_materials_specular": {
					"specularColorFactor": [
						0.42037705477998155,
						0.42037705477998155,
						0.42037705477998155
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "walls_mat",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 1
				},
				"metallicFactor": 0,
				"roughnessFactor": 0.968181848526001
			}
		}
	],
	"meshes": [
		{
			"name": "Cube.073",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"textures": [
		{
			"sampler": 0,
			"source": 0
		},
		{
			"sampler": 0,
			"source": 0
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "walls_color",
			"uri": walls_color_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 306,
			"max": [
				1.1872304677963257,
				1.6039626598358154,
				0.3456226587295532
			],
			"min": [
				-1.1872304677963257,
				-1.6039626598358154,
				-0.3456226587295532
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 306,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 306,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 522,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 2605,
			"byteOffset": 0
		}
	],
	"samplers": [
		{
			"magFilter": 9729,
			"minFilter": 9987
		}
	],
	"buffers": [
		{
			"byteLength": 2608,
			"uri": gravestone_x3_bin
		}
	]
}